import { Component, OnInit, Input, Output, EventEmitter, OnChanges,  SimpleChanges } from '@angular/core';
import { Product } from 'src/app/interfaces/product.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges{

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor() { 
    console.log('1. constructor')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges')
    console.log('changes',changes)
    
  }

  ngOnInit() {
    console.log('3. ngOnInit')
  }


  addCart(){
    console.log('añadir al carrito')
    this.productClicked.emit(this.product.id);
  }


}
