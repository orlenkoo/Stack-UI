import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-customers-by-location',
  templateUrl: './customers-by-location.component.html',
  styleUrls: ['./customers-by-location.component.scss']
})
export class CustomersByLocationComponent implements OnInit {
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
  public barChartLabels: Label[] = ['TAS', 'VIC', 'NSW', 'NT', 'OTHER'];;
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { 
      data: [20, 15, 35, 16, 22], 
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
