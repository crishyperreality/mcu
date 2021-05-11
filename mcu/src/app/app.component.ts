import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mcu';

  order: boolean;

  ngOnInit(): void {

  }

  chronology(e){
    this.order = e;
    console.log(this.order)
  }
}
