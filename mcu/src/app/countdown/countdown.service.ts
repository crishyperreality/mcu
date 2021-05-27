import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  constructor(private http: HttpClient) { }

  getNextRelease(): Observable<Movie> {
    return this.http.get<Movie>(
      'http://localhost:3000/nextRelease'
    )
  }

}
