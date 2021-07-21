import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrizedGeographicalChartComponent } from './parametrized-geographical-chart.component';

describe('ParametrizedGeographicalChartComponent', () => {
  let component: ParametrizedGeographicalChartComponent;
  let fixture: ComponentFixture<ParametrizedGeographicalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrizedGeographicalChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrizedGeographicalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
