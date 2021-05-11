import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Movie, Movies } from '../model/movie';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnChanges {

  @Input() movie: Movie;
  movies: Movies;
  @Input() release: boolean;
  constructor(private moviesService: MoviesService) { }

  ngOnChanges(): void {
    console.log(this.release)
    console.log(this.movie)
  }

  ngOnInit(): void {
    // console.log('start')
    // this.moviesService.viewReleaseOrder()
    // .subscribe((movies)=>{
    //   console.log(movies)
    //   this.movies = movies;
    // })
    // this.moviesService.viewChronologyOrder()
    //   .subscribe((movies)=>{
    //     console.log(movies)
    //     this.movies = movies;
    //   })
  }

  selectMovie(e): void {
    this.movie = e;
    console.log(this.movie)
  }

}
