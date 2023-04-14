import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styles: [],
})
export class BtnComponent implements OnInit {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() bgColor: 'success' | 'primary' | 'red' | 'light' = 'success';

  mapColors = {
    success: {
      'bg-success-700': true,
      'hover:bg-success-800': true,
      'focus:ring-success-300': true,
    },
    primary: {
      'bg-primary-700': true,
      'hover:bg-primary-800': true,
      'focus:ring-primary-300': true,
    },
    red: {
      'bg-red-700': true,
      'hover:bg-red-800': true,
      'focus:ring-red-300': true,
    },
    light: {
      'bg-gray-200': true,
      'hover:bg-gray-50': true,
      'focus:ring-gray-50': true,
      'text-gray-700': true,
    },
  };

  constructor() {}

  ngOnInit(): void {}

  // aplicar clases de forma dinamica ngClass
  // diccionario de colores tailwind.config.js
  getColors() {
    console.log(this.mapColors[this.bgColor])
    return this.mapColors[this.bgColor];
  }
}
