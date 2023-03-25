import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styles: [],
})
export class BtnComponent implements OnInit {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() bgColor: 'success' | 'primary' | 'red' = 'success';

  constructor() {}

  ngOnInit(): void {}

  // aplicar clases de forma dinamica ngClass
  // diccionario de colores tailwind.config.js
  getColors() {
    return {
      'bg-success-700': this.bgColor === 'success',
      'hover:bg-success-800': this.bgColor === 'success',
      'focus:ring-success-300': this.bgColor === 'success',
      'bg-primary-700': this.bgColor === 'primary',
      'hover:bg-primary-800': this.bgColor === 'primary',
      'focus:ring-primary-300': this.bgColor === 'primary',
      'bg-red-700': this.bgColor === 'red',
      'hover:bg-red-800': this.bgColor === 'red',
      'focus:ring-red-300': this.bgColor === 'red',
    };
  }
}
