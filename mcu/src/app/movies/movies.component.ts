import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Movies } from 'src/app/model/movie';
import { MoviesService } from './movies.service';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnChanges {

  @Output() selectedMovie = new EventEmitter<Movie>();
  movie: Movie;
  movies: Movies;
  @Input() release: boolean;
  active: boolean = false;
  constructor(private moviesService: MoviesService, httpClient: HttpClient) { }

  ngOnChanges(): void {
    if (this.release === false){
      console.log('uno')
      this.moviesService.viewChronologyOrder()
        .subscribe((movies)=>{
          console.log(movies)
          this.movies = movies;
        })
    } else {
      console.log('dos')
      this.moviesService.viewReleaseOrder()
        .subscribe((movies)=>{
        console.log(movies)
        this.movies = movies;
      })
    }
  }

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

  selectMovie(e): void {
    this.movie = e;
    console.log(this.movie)
  }

}
