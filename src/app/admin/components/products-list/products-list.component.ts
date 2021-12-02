import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../core/Services/Products/products.service';
import { Product } from 'src/app/core/models/product.model';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[]=[];
  displayedColumns: string[] =['id','title','price', 'actions']
  constructor( 
    private productsService: ProductsService
    ){ }

  ngOnInit(){
    this.fetchProducts();
  }
  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe((products) => {
      this.products = products;
          });
  }
  deleteProduct(id:string){
    this.productsService.deleteProduct(id)
    .subscribe(rta =>{
      this.fetchProducts();
    })

    }
  }
