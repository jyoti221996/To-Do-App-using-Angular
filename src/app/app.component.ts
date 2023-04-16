import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cwh_angular';

  constructor(){
    // setTimeout(() =>{
    //   this.title = "Changed title";
    // }, 2000);
  }
}
