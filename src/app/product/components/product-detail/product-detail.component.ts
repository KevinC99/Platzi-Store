import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productsServices: ProductsService
  ) { }

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      const iD = params.id;
      function nonUndef(test: Product){
        return test
      }
      this.product = nonUndef(this.productsServices.getProduct(iD) as Product)
      });
  }


}
