import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.scss']
})
export class MovieDisplayComponent implements OnInit, OnChanges {

  @Input() movie: Movie;
  constructor() { }

  ngOnChanges(): void {
    console.log(this.movie)
  }
  ngOnInit(): void {
  
  }

}
