import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, Movies } from '../model/movie'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {}

    viewReleaseOrder(): Observable<Movies>{
      return this.http.get<Movies>(
        'http://localhost:3000/releaseOrder'
      );
    }

    viewChronologyOrder(): Observable<Movies>{
      return this.http.get<Movies>(
        'http://localhost:3000/chronologyOrder'
      )
    }

}
