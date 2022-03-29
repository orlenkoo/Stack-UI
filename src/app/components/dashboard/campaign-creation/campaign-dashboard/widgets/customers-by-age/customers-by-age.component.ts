import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-customers-by-age',
  templateUrl: './customers-by-age.component.html',
  styleUrls: ['./customers-by-age.component.scss']
})
export class CustomersByAgeComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    /* scale: {
      gridLines:{
        display: false
      }
    } */
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    defaultColor: '#1E2640',
    scales: {
      xAxes: [{
          gridLines: {
            display:false
          },
          ticks: {
            display: false //this will remove only the label
        }
      }],
      yAxes: [{
          gridLines: {
            display:false,
            
          }   
      }]
  }

  };
  public barChartLabels: Label[] = ['60+', '50-59', '40-49', '30-39', '29-29', '0-18'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { 
      data: [65, 59, 80, 81, 56, 60], 
      label: 'Customers',
      borderColor: '#1E2640',
      backgroundColor: '#1E2640',
      hoverBorderColor: '#1E2640',
      hoverBackgroundColor: '#1E2640',
      borderWidth: 0,
      borderCapStyle: 'butt',
      barThickness: 14,
      // barPercentage: 1.0,
      // categoryPercentage: 1.0,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
