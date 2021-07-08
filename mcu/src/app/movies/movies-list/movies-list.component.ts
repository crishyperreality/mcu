import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movies } from 'src/app/model/movie';
import { MoviesService } from '../movies.service';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  @Output() selectedMovie = new EventEmitter<Movie>();
  movie: Movie;
  movies: Movies;
  @Input() release: boolean;
  active: boolean = false;
  constructor(private moviesService: MoviesService, httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log('hola!')
    this.moviesService.viewReleaseOrder()
    .subscribe((movies)=>{
      console.log(movies)
      this.movies = movies;
      console.log(this.movies)
    })
  }

  showMovie(movie: Movie): void {
    this.movie = movie;
    this.active = true;
  }

}
