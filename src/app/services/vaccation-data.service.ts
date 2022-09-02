import { AppComponent } from './../app.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VaccationDataService {

  constructor(private http:HttpClient) { }

  getVaccationRecords(){
    return this.http.get('assets/holidayPackage.json')
  }
  getCityRecords(){
    return this.http.get('assets/cities.json')
  }
}
