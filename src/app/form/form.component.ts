import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('f') completedForm: NgForm;
  defaultCurrency = 'USD';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.completedForm.value.formData);
  }

  onChartBtnClick(): void {
    console.log('chart!');
  }

  onTableBtnClick(): void {
    console.log('table!');
  }

}
