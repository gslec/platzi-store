import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductsService } from './../../../core/services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  products: Product[] = [];


  today = new Date();

  constructor(
    private productsService: ProductsService
  ) {
    console.log('1. Constructor');
  }

  ngOnInit(): void {
    console.log('3. ngOnInit');
    this.fetchProducts();

  }


  addCart() {
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id);
  }


  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProducts() {
    this.productsService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      });
  }
}
