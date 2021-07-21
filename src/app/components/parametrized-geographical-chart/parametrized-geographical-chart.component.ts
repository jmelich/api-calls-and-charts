import {Component, Input, OnInit} from '@angular/core';
import {GeographicData} from "../../models/geographic-data";

@Component({
  selector: 'app-parametrized-geographical-chart',
  templateUrl: './parametrized-geographical-chart.component.html',
  styleUrls: ['./parametrized-geographical-chart.component.scss']
})
export class ParametrizedGeographicalChartComponent implements OnInit {

  @Input() geographicData: GeographicData[] | undefined;
  @Input() segment: string | undefined;



  constructor() { }

  ngOnInit(): void {

  }

}
