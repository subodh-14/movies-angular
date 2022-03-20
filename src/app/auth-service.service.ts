import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  login(data): Observable<any> {
    return this.http.post(`https://demo.credy.in/api/v1/usermodule/login/`,data);
  }
}
