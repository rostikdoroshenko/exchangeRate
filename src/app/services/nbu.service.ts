import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NbuService {
    constructor(private httpclient: HttpClient) {}
    getData() : Observable <any> {
        return this.httpclient.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=20200302&json')
    }
}