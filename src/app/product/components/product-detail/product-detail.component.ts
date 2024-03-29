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
  product!: "";

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
      console.log(this.prod)
    });
  }
  createProduct(){
    const newProduct: Product ={
    id: '222',
    title:'nuevo desde Angular',
    image:'https://cdn.jsdelivr.net/gh/angular-material-extensions/pages@master/assets/angular-material-extensions-logo.png',
    price: 30,
    description: 'nuevo producto'
  }

    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      this.prod = product
      console.log(product)
    });
  }
  updateProduct(){
    const updateProduct: Partial<Product> ={
      id: this.prod.id,
      title:this.prod.title,
      image:this.prod.image
    }
    this.productsService.updateProduct( this.prod.id,updateProduct)
    .subscribe(product => {
      console.log(product)
    });
  }
  deleteProduct(){
    this.productsService.deleteProduct('222')
    .subscribe( rta=> {
      console.log(rta)
    });
  }
}
