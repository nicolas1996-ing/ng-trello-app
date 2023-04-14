import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styles: [],
})
export class ScrollComponent implements OnInit {
  products!: Product[]
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.mainService.getProducts().subscribe((products) => {
      this.products = products
      // console.log(products);
    });
  }
}
