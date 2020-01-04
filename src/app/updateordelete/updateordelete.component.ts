import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/Product.model';
import { GisbuyService } from '../Service/Gisbuy.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-updateordelete',
  templateUrl: './updateordelete.component.html',
  styleUrls: ['./updateordelete.component.css']
})
export class UpdateordeleteComponent implements OnInit {
user:Product
result:string
status:string
  constructor(private gisbuyService:GisbuyService,private myRouter:Router,private toastr:ToastrService) {
    
    
   }
//    GetAllProduct(user:Product)
//    {
// this.gisbuyService.form=Object.assign({},user)
//    }
// update(b)
// {
//   this.myRouter.navigate(['updateordelete/update',b.Proid],{skipLocationChange:true})
// }
GetProduct(u)
{
console.log(u)
this.myRouter.navigate(['/update',u]);
}
delete(Proid)
{
  var r=confirm("Are you sure want to delete this?")
  if(r==true)
  {
    this.gisbuyService.DeleteProduct(Proid).subscribe((res=>{
      console.log(res)
    }))
    this.toastr.info("Successfully deleted","Item")
    this.gisbuyService.GetAllProduct();
  }
  else{
console.log("cancel")
  }
  this.gisbuyService.GetAllProduct();
  
}
  ngOnInit() {
  this.gisbuyService.GetAllProduct();
  }

}
