import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NbuService } from '../services/nbu.service';
import { concatMap, delay, toArray } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('f') completedForm: NgForm;
  defaultCurrency = 'USD';
  public selectionIsSubmitted = false;
  public exchangeData: any;

  constructor(private nbuService: NbuService) { }

  ngOnInit(): void {
  }

  public onSubmit(): void{
    const startDateMills = Date.parse(this.completedForm.value.formData.inputStart);
    const endDateMills = Date.parse(this.completedForm.value.formData.inputEnd);
    const curr = this.completedForm.value.formData.currency;
    const periodDates = [];

    for (let i = startDateMills; i <= endDateMills; i += 86400000) {
      const dateFromMills = new Date(i);
      periodDates.push(this.getSelectedDateFormatted(dateFromMills.getFullYear(), dateFromMills.getMonth() + 1, dateFromMills.getDate()));
    }

    this.getExchangeRatesForSelectedPeriod(periodDates, curr);
  }

  private getSelectedDateFormatted(y: number, m: number, d: number): string {
    const month = m > 9 ? m : `0${m}`;
    const day = d > 9 ? d : `0${d}`;
    return `${y}${month}${day}`;
  }

  private getExchangeRatesForSelectedPeriod(period: string[], currency: string): void {
    from(period)
        .pipe(
            concatMap(date => this.nbuService.getData(currency, date).pipe(delay(500))),
            toArray()
        ).subscribe(result => {
          this.exchangeData = result;
          this.selectionIsSubmitted = true;
    });
  }
}
