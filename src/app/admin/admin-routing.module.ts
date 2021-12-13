import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { TableComponent } from './components/table/table.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
const routes: Routes = [
{
path: '',
  component: NavComponent,
  children: [
    {
      path: 'create',
      component: ProductFormComponent,
    },
    {
      path: 'table',
      component: TableComponent,
    },
    {
      path: 'dashboard',
      component: DasboardComponent,
    },
    {
      path: 'product-list',
      component: ProductsListComponent,
    },
    {
      path: 'product-list/create',
      component: FormProductComponent,
    },
    {
      path: 'product-list/update',
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
