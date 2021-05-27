import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { CountdownService } from './countdown.service';
import * as countdown from 'countdown'
import { Time } from '../model/time';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  movieReleased: Movie;
  movieDate: Date;
  timeLeft: Time;

  constructor(private countdownService: CountdownService) { }

  ngOnInit(): void {
    console.log('trucotrato')
    this.getReleaseDate();
  }

  getTime(): void {
    this.movieDate = new Date(this.movieReleased.release_date);
    // console.log(countdown(new Date(), this.movieDate).toString());
    countdown(this.movieDate,(ts)=>{
      this.timeLeft= ts;
      console.log(this.timeLeft)
    // tslint:disable-next-line: no-bitwise
    }, countdown.MONTHS | countdown.DAYS | countdown.HOURS | countdown.MINUTES);
  }

  getReleaseDate(): void { 
    this.countdownService.getNextRelease()
    .subscribe((movie)=>{
      console.log(movie)
      this.movieReleased = movie;
      this.getTime()
    })
  }

}
