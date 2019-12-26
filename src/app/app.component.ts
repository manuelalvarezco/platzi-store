import { Component } from '@angular/core';
import { Product } from './interfaces/product.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';

  products:Product[] = [
    {
      id:1,
      img:'assets/img/camiseta.png',
      title:'Camiseta',
      price:80000,
      description:'Camiseta'
    },
    {
      id:2,
      img:'assets/img/camiseta.png',
      title:'Camiseta',
      price:80000,
      description:'Camiseta'
    },
    {
      id:3,
      img:'assets/img/camiseta.png',
      title:'Camiseta',
      price:80000,
      description:'Camiseta'
    }
  ]

  clickProduct(id:number){
    console.log('id', id)
  }
}
