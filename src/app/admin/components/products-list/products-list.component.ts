import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/core/models/product.model';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();

  }

  fetchProducts() {
    this.productsService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  deleteProduct(product: Product, index: number) {
    this.productsService.deleteProduct(product.id)
      .subscribe(rta => {
        if (rta === false) {
          alert('No fue posible eliminar');
        } else {
          this.products.splice(index, 1);
          this.products = [...this.products];
        }
      });
  }

}
