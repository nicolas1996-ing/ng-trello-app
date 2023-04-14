import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { MainService } from 'src/app/services/main.service';
import { DataSourceProduct } from './data-source';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [],
})
export class TableComponent implements OnInit {
  products = new DataSourceProduct();
  totalPriceProducts: number = 0;
  // inputSelect = new FormControl('', [Validators.nullValidator]);
  searchForm!: FormGroup;

  columns = [
    {
      name: 'id',
      type: 'string',
    },
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'price',
      type: 'currency',
    },
    {
      name: 'images',
      type: 'image',
    },
    {
      name: 'update',
      type: 'action',
    },
  ];

  get selectValues() {
    return ['id', 'title', 'price'];
  }
  get columnsName() {
    return this.columns.map((c) => c.name);
  }

  constructor(private mainService: MainService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getProducts();
    // this.initSelectForm();
    this.initForm();
    this.changesInitForm();
  }

  getProducts() {
    this.mainService.getProducts().subscribe((products) => {
      this.products.initData(products, this.columnsName);
      this.totalPriceProducts = this.products.getTotal();
    });
  }

  initForm() {
    this.searchForm = this.fb.group({
      inputStr: ['', Validators.nullValidator],
      selectType: [this.columnsName[1], Validators.nullValidator],
    });
  }

  changesInitForm() {
    this.searchForm.valueChanges.pipe(debounceTime(1000)).subscribe((_) => {
      const { inputStr: query, selectType: column } = this.searchForm.value;
      this.products.filterProducts(query, column);
    });
  }

  initSelectForm() {
    /*
    this.inputSelect.valueChanges
      .pipe(debounceTime(2000))
      .subscribe((selectValue) => {
        this.products.filterProducts(selectValue)
      });
      */
  }

  update(product: Product) {
    this.products.updateProduct(product.id, { price: 20 });
  }
}
