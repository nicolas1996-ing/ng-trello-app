import { Component, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-solid-svg-icons'; // font-awesome

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styles: [],
})
export class BoardsComponent implements OnInit {
  faClock = faClock;
  constructor() {}

  ngOnInit(): void {}
}
