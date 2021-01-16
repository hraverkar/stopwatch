import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-screen',
  templateUrl: './display-screen.component.html',
  styleUrls: ['./display-screen.component.scss']
})
export class DisplayScreenComponent implements OnInit {
  public miliseconds: number;
  public seconds: number;
  public minutes: number;

  constructor() {
    this.initVariables();
  }
  initVariables(): void {
    this.miliseconds = 1;
    this.seconds = 1;
    this.minutes = 1;
  }

  ngOnInit(): void {
  }

}
