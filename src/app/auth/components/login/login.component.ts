import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/Services/Auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService:AuthService
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }
 login(event:Event){
   if(this.form.valid){
     const value = this.form.value
     this.authService.login(value.email,value.password)
     .then(()=>{
       this.router.navigate(['/admin'])
     })
     .catch(()=>{
        alert('no es un dato valido')
     });
   }
 }

  private buildForm() {
    this.form= this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]],
    });
  }
}

