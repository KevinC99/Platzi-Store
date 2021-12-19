import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/Services/Products/products.service';
import { Router } from '@angular/router';
import { my_validator } from 'src/app/utils/validators';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
form!:FormGroup;
  constructor(
  private formBuilder: FormBuilder,
  private productsService: ProductsService,
  private router: Router,
 
  ) {
    this.buildForm();
  }
    
  ngOnChanges(){}

  ngOnInit(): void {
  }
  saveProdsuccessfully(event:Event){
  event.preventDefault();
    if(this.form.valid){
      const product= this.form.value;
      this.productsService.createProduct(product)
      .subscribe((newProduct) =>{
        console.log(newProduct);
        this.router.navigate(['./admin/product-list'])
      });
    }
}
  
 private buildForm(){
  const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
   this.form=this.formBuilder.group({
     id:['',[Validators.required]],
     image:['',[Validators.required,Validators.pattern(reg)]],
     title:['',[Validators.required]],
     price:['',[Validators.required,
       my_validator.isPriceValid]],
     description:['',Validators.required],
   })
 }
 get getUrl(){
  return this.form.get('image')
 }
 get priceField(){
   return this.form.get('price')
 }
}