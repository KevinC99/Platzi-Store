import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/Services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  products$!: Observable <Product[]>;
  
  constructor(
    private cartService:CartService
    ) { 
      this.products$ = this.cartService.cart$
    }

  ngOnInit() {
  }

}
