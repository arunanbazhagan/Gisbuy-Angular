import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomepageComponent } from './homepage/homepage.component';
import {AuthGuard} from './helpers/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo : '/homepage', pathMatch: 'full'
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    children:[{
      path:'addproduct',
      component:AddproductComponent
    }]
  },
  {
    path: 'addProduct',
    component: AddproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
