import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';
import { Product } from '../../../core/models/product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
      // console.log(this.product);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
      .subscribe(product => {
        this.product = product;
        console.log(product);

      });
  }



  createProduct() {
    const newProduct: Product = {
      id: '47',
      title: 'Super Mario Maker 2',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81sORBD9q9L._SL1500_.jpg',
      description: 'Let your imagination run wild with new tools, course parts, and features as you create the Super Mario courses of your dreams.',
      price: 37.90
    };

    this.productsService.createProduct(newProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      id: '47',
      title: 'Super Mario Maker 2 - Edited',
      image: 'https://icdn4.digitaltrends.com/image/digitaltrends_es/smm2_20190528_011-640x640.jpg',
      description: 'Juega, crea y comparte niveles de desplazamiento lateral de Super Mario en cualquier momento y en cualquier lugar, con el juego Super Mario Maker ',
      price: 37.90
    };

    this.productsService.updateProduct(updateProduct.id, updateProduct)
      .subscribe(product => {
        console.log(product);
      });

  }

  deleteProduct(id: string) {


    this.productsService.deleteProduct(id)
      .subscribe(rta => {
        console.log(rta);
        window.location.reload();
      });

  }

}

