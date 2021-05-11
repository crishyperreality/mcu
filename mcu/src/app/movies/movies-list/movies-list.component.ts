import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Movies } from 'src/app/model/movie';
import { MoviesService } from '../movies.service';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit, OnChanges {

  @Output() selectedMovie = new EventEmitter<Movie>();
  movies: Movies;
  @Input() release: boolean;
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
    // this.moviesService.viewReleaseOrder()
    // .subscribe((movies)=>{
    //   console.log(movies)
    //   this.movies = movies;
    // })
  }

  showMovie(movie: Movie): void {
    // this.movie = movie;
    this.selectedMovie.emit(movie);
  }

}
