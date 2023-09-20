import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { environment } from 'src/environment/enviroment.uat';

@Component({
  selector: 'app-custlogin',
  templateUrl: './custlogin.component.html',
  styleUrls: ['./custlogin.component.css']
})
export class CustloginComponent {

  constructor(private router: Router, private http:HttpClient) {}
  
  obj={} as Customer;
  confirmpass:number;
  
  login(){
    console.log(this.obj.email+" "+this.obj.password)
    this.http.post(environment.url+'CusAuthe',this.obj).subscribe(
      (data:any)=>{
        if(!data)
        {
          window.alert("Invalid User")
        }
        else{
          this.router.navigate(['/Home']);
        }
      }
    )
  }
}
