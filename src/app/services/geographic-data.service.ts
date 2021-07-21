import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GeographicData} from "../models/geographic-data";
import {catchError, map, retry} from "rxjs/operators";
import {throwError} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class GeographicDataService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  getData() {
    return this.http.get<GeographicData[]>('https://api.idescat.cat/pob/v1/geo.json?tipus=com&lang=es').pipe(
      retry(3),
      map(res => {
        const data = (res as any).feed.entry;
        return data.map( (entry: any) => {
          return {
            title: entry.title,
            maleQty: entry['cross:DataSet']['cross:Section']['cross:Obs'][0].OBS_VALUE,
            femaleQty: entry['cross:DataSet']['cross:Section']['cross:Obs'][1].OBS_VALUE,
            total: entry['cross:DataSet']['cross:Section']['cross:Obs'][2].OBS_VALUE
          }
        });
      }),
      catchError((err) => {
        this.snackBar.open('Error accediendo a la fuente de datos');
        return throwError(err);
      })
    );
  }
}
