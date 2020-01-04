import { Component, OnInit } from '@angular/core';
import { GisbuyService } from '../Service/Gisbuy.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../Model/Product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
user:Product
public users:Product[]=[{
  Proid:'',
  Proname:'',
  Category:'',
  Type:'',
  Des1:'',
  Des2:'',
  Des3:'',
  Des4:'',
  Des5:'',
  Proprice:0,
  Quantity: 0,
  Proimage:'',
  Proquantity:0
}]
  constructor(private gisbuyService:GisbuyService,private toaster:ToastrService) {
    this.user=new Product()
    
   }

  Addproduct()
  {
console.log(this.users)
 this.gisbuyService.AddProduct(this.users).subscribe((res=>{
   if(res==true)
   {
     this.toaster.success("Product Is Successfully Added","New Product")
 this.resetForm();
  }
  else
  {
    this.toaster.warning("Unable to Add Product","New Product")
    this.resetForm()
  }
}))
  }
  add()
  {
this.users.push({
  Proid:'',
  Proname:'',
  Category:'',
  Type:'',
  Des1:'',
  Des2:'',
  Des3:'',
  Des4:'',
  Des5:'',
  Proprice:0,
  Quantity: 0,
  Proimage:'',
  Proquantity:0

})
  }
  remove(i:number)
  {
this.users.splice(i,1)
  }
  ngOnInit() {
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.gisbuyService.form={
      Proid:null,
      Proname:'',
      Category:'',
      Type:'',
      Des1:'',
      Des2:'',
      Des3:'',
      Des4:'',
      Des5:'',
      Proprice:null,
      Quantity:null,
      Proimage:'',
      Proquantity:null
    }
  }

}
