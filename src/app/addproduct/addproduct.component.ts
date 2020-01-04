import { Component, OnInit } from '@angular/core';
import { GisbuyService } from '../Service/Gisbuy.service';
import { Product } from '../Model/Product.model';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
users:Product
myForm:FormGroup
result:any
added:string
id:any=[]
  constructor(private gisbuyService:GisbuyService,private toastr:ToastrService)
 {
 
   
  
   
  
  }
  // Addproduct()
  // {
  //   console.log(this.users)
  //   this.result=this.gisbuyService.AddProduct(this.users).subscribe((res=>{
  //     if(res === true)
  //     {
  //       this.toastr.info("Successfully deleted")
  //     }
  //     else
  //     {
  //       this.toastr.warning("Unable to Add Product.Something went wrong...Check the Product Id")
  //     }
  //   }))
    
  //   this.users=new Product()
  // }
  ngOnInit() {
    
  }

}
