import { Component, OnInit } from '@angular/core';

import { Data } from '../data';
import { NbuService } from '../services/nbu.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private nbuService: NbuService) { }

  listData: Data[];

  ngOnInit(): void {
    this.nbuService.getData()
    .subscribe(
      data => {
        this.listData = data;
      }
    );
  }
}
