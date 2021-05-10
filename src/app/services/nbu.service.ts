import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NbuService {
    constructor(private http: HttpClient) {}

    public getData(curr: string = 'EUR', date: string = '20200302'): Observable <any> {
        return this.http.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${curr}&date=${date}&json`);
    }
}
