import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';


const routes: Routes = [ 
  {
    path:"",pathMatch:"full",redirectTo:"categories"
  },
  {
    path:"categories/:category", component:ProductsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
