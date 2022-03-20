import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  token:string

  constructor(private http: HttpClient ,private LoginComponent:LoginComponent) {this.token=''}

  createAuthorizationHeader(headers: HttpHeaders,token:string) {
    headers.append('Authorization', token)
  }

  getMovie() {
    let headers = new HttpHeaders();
    let tokens = this.LoginComponent.token
    this.createAuthorizationHeader(headers,tokens);
    return this.http.get<any>(`https://demo.credy.in/api/v1/maya/movies/`,{
      headers : headers
    });
  }
}

