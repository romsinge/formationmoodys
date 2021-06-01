import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

// ne jamais importer ça
// import * as EventEmitter from 'events';

@Component({
  selector: 'amb-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    title: '',
    price: 0
  }

  @Output() details: EventEmitter<Product> = new EventEmitter()

  isMouseover: boolean = false

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleMouseover() {
    this.isMouseover = !this.isMouseover
  }

  handleClick() {
    this.details.emit(this.product)
  }

}
