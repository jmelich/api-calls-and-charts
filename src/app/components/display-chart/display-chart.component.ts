import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GeographicData} from "../../models/geographic-data";
import {GeographicDataService} from "../../services/geographic-data.service";

@Component({
  selector: 'app-display-chart',
  templateUrl: './display-chart.component.html',
  styleUrls: ['./display-chart.component.scss']
})
export class DisplayChartComponent implements OnInit {

  segment: string | undefined;

  geographicData: GeographicData[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private geographicDataService: GeographicDataService
  ) { }

  ngOnInit(): void {

    this.geographicDataService.getData().subscribe( data => {
      this.geographicData = data;
    })

    this.route.params.subscribe(params => {
      this.segment = params.segment;
    });
  }

}
