import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/Services/Products/products.service';
import { Router } from '@angular/router';
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
  private router: Router
  ) {
    this.buildForm();
  }

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
   this.form=this.formBuilder.group({
     id:['',Validators.required],
     tittle:['',Validators.required],
     price:['',Validators.required],
     image:'',
     description:['',Validators.required],
   })
 }
}

