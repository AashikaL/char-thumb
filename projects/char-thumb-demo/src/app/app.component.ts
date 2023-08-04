import { Component } from '@angular/core';
import charThumb from 'projects/char-thumb/src/char-thumb';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'char-thumb-demo';
  constructor() {
    const name = charThumb('aashika', { size: 1 });
    console.log(name);
  }
}




