import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustregisterComponent } from './custregister/custregister.component';
import { CustloginComponent } from './custlogin/custlogin.component';
import { AppRoutingModule } from '../app-routing.module';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
const customerRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  // Add other routes for your customer module if needed
];

@NgModule({
  declarations: [
    CustregisterComponent,
    CustloginComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forChild(customerRoutes),
    CommonModule,
    HttpClientModule,
    // AppRoutingModule,
    FormsModule
  ],
  exports:[
    CustregisterComponent,
    CustloginComponent,
    AboutComponent,
  ]
})
export class CustomerModule { }
