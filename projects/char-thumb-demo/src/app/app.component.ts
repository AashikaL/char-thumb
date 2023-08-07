import { Component } from '@angular/core';
import { CharThumbnail } from 'char-thumb';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'char-thumb-demo';
  constructor() {
    const charThumbnail = new CharThumbnail();
    const thumbnail = charThumbnail.charThumb('character Name', { size: 1 });
    const thumbnail1 = charThumbnail.charThumb('character Name', { size: 2 });
    console.log('Thumbnail:', thumbnail);
    console.log('Thumbnail:', thumbnail1);
  }
}




