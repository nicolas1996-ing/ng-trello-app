import { Component, OnInit } from '@angular/core';
import {
  faClock,
  faBox,
  faWaveSquare,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons'; // font-awesome

import { faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styles: [],
})
export class BoardsComponent implements OnInit {
  faClock = faClock;
  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  itemsAccordion = [
    {
      label: 'item 1',
      items: [
        {
          label: 'sub item 1.1',
        },
        {
          label: 'sub item 1.2',
        },
      ],
    },
    {
      label: 'item 2',
      items: [
        {
          label: 'sub item 2.1',
        },
        {
          label: 'sub item 2.2',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
