import { Component } from '@angular/core';

@Component({
  selector: 'lib-char-thumb',
  template: `
    <div class="container" style="margin-top: 20px;">
      <div *ngIf="showInitials" [style.background-color]="circleColor" class="circle">
        {{ initials }}
      </div>
    <div style="margin-top: 15px;">
      <input type="text" [(ngModel)]="name" (input)="onNameInput()">
        </div>
  </div>
  `,
  styles: [
    `.circle {
      border-radius   : 50%;
      width           : 60px;
      height          : 60px;
      display         : flex;
      justify-content : center;
      align-items     : center;
  }`
  ]
})
export class CharThumbComponent {
  public photoUrl!: string;
  public name: string = '';
  public showInitials = false;
  public initials!: string;
  public circleColor!: string;
  private colors = [
    '#EB7181', // red
    '#468547', // green
    '#FFD558', // yellow
    '#3670B2', // blue
  ];
  ngOnInit() {
  }
  onNameInput() {
    if (this.name !== '') {
      this.showInitials = true;
      this.createInititals();
      const randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
      this.circleColor = this.colors[randomIndex];
    } else {
      this.showInitials = false;
    }
  }
  private createInititals(): void {
    const words = this.name.trim().split(' ');

    let initials = '';

    if (words.length >= 1) {
      initials += words[0].charAt(0).toUpperCase();
    }
    if (words.length >= 2) {
      initials += words[1].charAt(0).toUpperCase();
    }
    if (words.length === 3) {
      initials += words[2].charAt(0).toUpperCase();
    }
    else if (words.length >= 2) {
      initials += words[1].charAt(1).toUpperCase();
    }
    this.initials = initials.replace(/[^a-zA-Z,0-9]/g, '');
  }
}
