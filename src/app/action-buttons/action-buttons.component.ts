import { Component, OnInit } from '@angular/core';
import { faPlay, faStopwatch, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {
  public faPlay: typeof faPlay;
  public faStopwatch: typeof faStopwatch;
  public faTrash: typeof faTrash;

  constructor() { }

  ngOnInit(): void {
  }

}
