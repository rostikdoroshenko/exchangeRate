import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../chart/canvasjs.min';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})

export class ChartComponent implements OnInit {
  ngOnInit(): void {
    const dataPoints = [];
    let y = 0;
    for ( let i = 0; i < 1000; i++ ) {
      y += Math.round(5 + Math.random() * (-5 - 5));
      dataPoints.push({ y: y });
    }
    const chart = new CanvasJS.Chart('chartContainer', {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Performance Demo - 10000 DataPoints'
      },
      subtitles: [{
        text: 'Try Zooming and Panning'
      }],
      data: [
      {
        type: 'line',
        dataPoints: dataPoints
      }]
    });

    chart.render();
  }
}
