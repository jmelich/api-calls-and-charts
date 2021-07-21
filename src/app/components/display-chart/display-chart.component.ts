import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GeographicData, Quantity} from "../../models/geographic-data";
import {GeographicDataService} from "../../services/geographic-data.service";
import {ChartDataSets, ChartType} from "chart.js";
import {Label} from "ng2-charts";

@Component({
  selector: 'app-display-chart',
  templateUrl: './display-chart.component.html',
  styleUrls: ['./display-chart.component.scss']
})
export class DisplayChartComponent implements OnInit {

  segment: string | undefined;

  chartData: ChartDataSets[] = [];
  chartLabels: Label[] = [];

  chartType: ChartType = 'bar';

  constructor(
    private route: ActivatedRoute,
    private geographicDataService: GeographicDataService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.segment) {
        this.geographicDataService.getData().subscribe( geographicDataEntries => {

          let extractedChartData = geographicDataEntries.reduce( (accumulated: any, current: GeographicData) => {
            accumulated.values.push(current.quantities[params.segment as keyof Quantity]);
            accumulated.label.push(current.title);
            return accumulated;
          },{values: [], label: []});

          this.chartData = <ChartDataSets[]>[{data: extractedChartData.values, label: 'Population per catalonian region'}];
          this.chartLabels = extractedChartData.label;

        });
      }
    });
  }

}
