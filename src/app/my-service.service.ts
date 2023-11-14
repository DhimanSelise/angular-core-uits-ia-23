import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getUpcommingMovies(): Observable <any> {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/upcoming?api_key=a54d7a09afeebfe772e8d685c01b2422');
  }
}
