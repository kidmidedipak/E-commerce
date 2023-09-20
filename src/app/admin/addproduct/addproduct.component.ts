import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from 'src/app/Classes/product';
import { environment } from 'src/environment/enviroment.uat';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  constructor(private http:HttpClient){}

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  obj={} as Product;
  
  imagePreview: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.showImagePreview();
  }

  showImagePreview() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result;
        
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.imagePreview = null;
    }
  }

  objarr:Object[]=[];
  onUpload() {
    // this.obj.image=this.selectedFile;
    if(this.selectedFile==null){
      alert("Select product image")
    }else{
    
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
      uploadImageData.append('name', JSON.stringify(this.obj.name));
      uploadImageData.append('category', JSON.stringify(this.obj.category));
      uploadImageData.append('description', JSON.stringify(this.obj.description));
      uploadImageData.append('price', JSON.stringify(this.obj.price));
      uploadImageData.append('brand', JSON.stringify(this.obj.brand));
      uploadImageData.append('quantity', JSON.stringify(this.obj.quantity));
      
      console.log(this.obj.name)
    this.http.post(environment.url+"addimage",uploadImageData )
      .subscribe( (data:any)=>{
        if(data)
        {
          alert("Product successfully added")
        }else{
          alert("Invalid to add product")
        }
      }
      );
      
      // this.http.post(environment.url+"addproduct", this.obj)
      // .subscribe( (data:any)=>{
      //   console.log(data.toString)
      // }
      // );
  }
}
 

}


