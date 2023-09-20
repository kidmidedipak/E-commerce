import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { RouterModule } from '@angular/router';

 
@NgModule({
  declarations: [
    AddproductComponent,
    AdmindashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    AddproductComponent
  ]
})
export class AdminModule { }
