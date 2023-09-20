import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { environment } from 'src/environment/enviroment.uat';

@Component({
  selector: 'app-custregister',
  templateUrl: './custregister.component.html',
  styleUrls: ['./custregister.component.css']
  
})
export class CustregisterComponent {

  constructor(private router: Router,public http:HttpClient){

  }

  obj={} as Customer;
  confirmpass:String;
  
  register(){
    if(this.obj.name==null || this.obj.contact==null || this.obj.dob==null || this.obj.gender==null 
      || this.obj.email==null || this.obj.password==null  ){
    alert("Please fill out all fields")
    return;
    }
    
    if(this.obj.password==this.confirmpass)
    {
      this.confirmRegister();
    }else{
      alert("password and confirm password does not match")
    }

    
  }

  confirmRegister(){
    this.http.post(environment.url+'register',this.obj).subscribe(
      (data:any)=>{
        if(!data)
        {
          window.alert("Something Wrong")
        }
        else{
          window.alert("Successfully Register")
          this.router.navigate(['/Login']);
        }
      }
    )
  }
}
