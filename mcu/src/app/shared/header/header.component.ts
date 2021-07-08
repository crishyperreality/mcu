import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  release: boolean;
  explainRelease: boolean = false;
  explainChronology: boolean = false;
  @Output() order = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  showChronology(){
    this.release = false;
    this.order.emit(this.release)
  }

  showRelease(){
    this.release = true;
    this.order.emit(this.release)
  }


}




