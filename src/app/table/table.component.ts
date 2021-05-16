import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() exchangeData: any;
  result: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.showTable(changes.exchangeData.currentValue);
  }

  private showTable(data): void {
    let id;
    let rate;
    let exchangedate;
    for (let i = 0; i < data.length; i++) {
      id = i + 1;
      rate = data[i][0].rate;
      exchangedate = data[i][0].exchangedate;
      this.result.push({id, rate, exchangedate});
    }
  }
}
