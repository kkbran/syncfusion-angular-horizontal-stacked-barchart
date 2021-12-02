import {
  ILoadedEventArgs,
  ChartTheme,
  ChartComponent,
} from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

/**
 * Sample for Stacked Column Series
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('chart')
  public chart: ChartComponent;

  public chartData = [
    {
      values: [{ x: '2014', y: 111.1 }],
    },
    {
      values: [{ x: '2014', y: 76.9 }],
    },
    {
      values: [{ x: '2014', y: 66.1 }],
    },
    {
      values: [{ x: '2014', y: 42.1 }],
    },
    {
      values: [{ x: '2014', y: 120.1 }],
    },
  ];

  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: 'Category',
    visible: false,
  };

  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    visible: false,
  };

  public chartArea: Object = {
    border: {
      width: 6,
    },
  };
  public radius = { bottomLeft: 8, bottomRight: 8, topLeft: 8, topRight: 8 };

  public width: string = Browser.isDevice ? '100%' : '10%';

  constructor() {
    //code
  }
}
