import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environment/enviroment.uat';
import { Product } from '../Classes/product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  getImage(id:number) {
    this.http.get(environment.url+"getProduct" +id)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.image;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
     return this.retrievedImage;
  }


  proarr: Product[] = [];
  constructor(private router: Router,public http:HttpClient){
    this.http.get(environment.url+'getallproduct').subscribe(
      (data:any)=>{
        console.log("cons")
        this.proarr=data;
      }
    )
  }
}
