import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements /*OnChanges,*/ OnInit, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
  ];


  today = new Date();

  constructor() {
      console.log('1. Constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //     console.log('2. ngOnChanges');
  //     console.log(changes)
  // }

  ngOnInit(): void {
      console.log('3. ngOnInit');

  }

  ngDoCheck() {
      console.log('4. doCheck');
  }

  addCart() {
      console.log('Añadir al carrito');
      this.productClicked.emit(this.product.id);
  }

  ngOnDestroy() {
      console.log('onDestroy');
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }
}
