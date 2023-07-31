import { NgModule } from '@angular/core';
import { CharThumbComponent } from './char-thumb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CharThumbComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    CharThumbComponent
  ]
})
export class CharThumbModule { }
