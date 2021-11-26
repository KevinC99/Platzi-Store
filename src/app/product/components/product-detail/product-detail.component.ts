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

  products: Product[]=[];
  prod!: Product; 

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }
  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      const iD = params.id;

      function nonUndef(test: Product){
        return test
      }
      //this.product = nonUndef(this.productsService.getProduct(iD) as unknown as Product)
      this.fetchProducts(iD);
    });
  
  }

  fetchProducts(iD : string){
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products.filter(product => product.id === iD);
      this.prod = this.products[0]
      console.log(products.find(products => products.id === iD))
      console.log(iD)
    });
  }

}