import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import{MatIconModule} from '@angular/material/icon';
import { FormProductComponent } from './components/form-product/form-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

@NgModule({
  declarations: [ NavComponent,ProductsListComponent, FormProductComponent, UpdateProductComponent,],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MatIconModule,
  ]
})
export class AdminModule { }
