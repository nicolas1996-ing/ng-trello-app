import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

// programacion reactiva
export class DataSourceProduct extends DataSource<Product> {
  data = new BehaviorSubject<Product[]>([]);
  originalData: Product[] = [];
  columnsName: string[] = [];

  connect(): Observable<Product[]> {
    return this.data;
  }
  disconnect(): void {}

  initData(products: Product[], columnsName: string[]) {
    this.data.next(products); // asignar nuevo valor a -data-
    this.originalData = products;
    this.columnsName = columnsName;
  }

  getTotal() {
    const products = this.data.getValue();
    return products.reduce((v, p) => p.price + v, 0);
  }

  updateProduct(id: Product['id'], changes: Partial<Product>) {
    const products = this.data.getValue();
    let productIdx = products.findIndex((p) => p.id == id);
    if (productIdx !== -1) {
      products[productIdx] = {
        ...products[productIdx],
        ...changes,
      };
    }
    this.data.next(products); // actualizar data
  }

  filterProducts(
    query: string,
    column: 'title' | 'description' | 'price' | 'id' = 'title'
  ) {
    const products = this.originalData;
    let productsFilter: Product[] = [];

    if (query !== '') {
      switch (column) {
        case 'title':
          productsFilter = products.filter((product) => {
            return product[column]
              .toLocaleLowerCase()
              .includes(query.toLocaleLowerCase());
          });
          break;
        case 'price':
          productsFilter = products.filter(
            (product) => Number(product[column]) >= Number(query)
          );
          break;
        case 'id':
          productsFilter = products.filter(
            (product) => Number(product[column]) === Number(query)
          );
          break;

        default:
          productsFilter = products;
          break;
      }

      this.data.next(productsFilter); // actualizar data
    }
  }
}
