import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { NbuService } from './services/nbu.service';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ExchangeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [NbuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
