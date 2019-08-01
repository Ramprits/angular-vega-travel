import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ToursService {

  constructor(private http: HttpClient) { }

  getTours() {
    return this.http.get('http://localhost:51113/api/tours')
  }

}