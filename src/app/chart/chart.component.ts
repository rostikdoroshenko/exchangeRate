import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as CanvasJS from '../chart/canvasjs.min';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})

export class ChartComponent implements OnInit, OnChanges {
  @Input() exchangeData: any;

  public ngOnInit(): void {
    const dataPoints = [];
    let y = 0;
    for ( let i = 0; i < 1000; i++ ) {
      y += Math.round(5 + Math.random() * (-5 - 5));
      dataPoints.push({ y });
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
        dataPoints
      }]
    });

    chart.render();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}