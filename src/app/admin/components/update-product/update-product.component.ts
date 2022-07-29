import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder,UntypedFormGroup,Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/Services/Products/products.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { my_validator } from 'src/app/utils/validators';
import { Product } from 'src/app/core/models/product.model';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  form!:UntypedFormGroup;
  prod!:Product
  product!:"";
  constructor(
  private formBuilder: UntypedFormBuilder,
  private productsService: ProductsService,
  private router: Router,
  private route: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
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
  saveProdsuccessfully(event:Event){
  event.preventDefault();
    if(this.form.valid){
      const product= this.form.value;
      this.productsService.updateProduct(this.prod.id,product)
      .subscribe((product) =>{
        console.log(product);
        this.router.navigate(['./admin/product-list'])
      });
    }
}
 private buildForm(){
   this.form=this.formBuilder.group({
    //  title:['',[Validators.required]],
     price:['',[Validators.required,
       my_validator.isPriceValid]],
     description:['',Validators.required],
     image:['',[Validators.required]]
   })
 }
 get priceField(){
   return this.form.get('price')
 }
}
