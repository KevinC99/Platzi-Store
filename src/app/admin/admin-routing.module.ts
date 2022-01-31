import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './components/form-product/form-product.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
const routes: Routes = [
{
path: '',
  component: NavComponent,
  children: [
    {
      path: 'product-list',
      component: ProductsListComponent,
    },
    {
      path: 'product-list/create',
      component: FormProductComponent,
    },
    {
      path: 'product-list/update/:id',
      component:UpdateProductComponent,
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
