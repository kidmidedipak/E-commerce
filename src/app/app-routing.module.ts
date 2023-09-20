import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustregisterComponent } from './customer/custregister/custregister.component';
import { CustloginComponent } from './customer/custlogin/custlogin.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AboutComponent } from './customer/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path:'Home', component:HomeComponent},
  {path:'Register', component:CustregisterComponent},
  {path:'Login', component:CustloginComponent},
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  

  // admin
  {path:'AdminHome', component:AdmindashboardComponent},
  {path:'AddProduct', component:AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
