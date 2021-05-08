import { Component, OnInit } from '@angular/core';
import { NbuService } from '../services/nbu.service';
import { Data } from '../data';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  constructor(private _nbuService: NbuService) { }

  listData: Data[];

  ngOnInit(): void {
    this._nbuService.getData()
    .subscribe(
      data => {
        this.listData = data;
      }
    )
  }

}
