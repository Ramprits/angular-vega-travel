import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable()
export class VehicleService {

  constructor(private http: HttpClient) { }
  getMakes(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:51113/api/makes`).pipe(tap((data) => {
      console.log(data)
    }))
  }

}