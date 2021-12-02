import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../core/Services/Products/products.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products =[]
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
      products=products
    });
  }
}
