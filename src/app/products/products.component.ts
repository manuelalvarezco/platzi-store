import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  products: Product[] = [
    {
      id: 1,
      img: 'assets/img/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'Camiseta'
    },
    {
      id: 2,
      img: 'assets/img/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'Camiseta'
    },
    {
      id: 3,
      img: 'assets/img/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'Camiseta'
    }
  ];

  clickProduct( id : number){
    console.log('id', id)
  }

}
