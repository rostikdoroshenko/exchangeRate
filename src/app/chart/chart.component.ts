import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as CanvasJS from '../chart/canvasjs.min';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})

export class ChartComponent implements OnInit, OnChanges {
  @Input() exchangeData: any;

  public ngOnInit(): void { }

  public ngOnChanges(changes: SimpleChanges): void {
    this.drawChart(changes.exchangeData.currentValue);
  }

  private drawChart(data): void {
    const dataPoints = [];
    let y = 0;
    for ( let i = 0; i < data.length; i++ ) {
      y = data[i][0].rate;
      dataPoints.push({ y });
    }
    const chart = new CanvasJS.Chart('chartContainer', {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: `Exchange Rate:  ${data[0][0].cc}:  ${data[0][0].exchangedate} - ${data[data.length - 1][0].exchangedate}`
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
}
