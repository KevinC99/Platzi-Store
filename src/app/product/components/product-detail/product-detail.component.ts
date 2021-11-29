import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../../../core/Services/Products/products.service';
import { Product } from './../../../core/models/product.model';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  prod!: Product; 

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }
  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      this.fetchProduct(params.id);
    });
  
  }

  fetchProduct(id : string){
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.prod = product
      console.log(product)
    });
  }

}