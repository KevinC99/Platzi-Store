import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CartService } from 'src/app/core/Services/cart.service';

import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product!: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(private cartService: CartService) {
  }

  addCart() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
    this.cartService.addCart(this.product);
  }

}
