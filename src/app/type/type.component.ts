import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/Product.model';
import { GisbuyService } from '../Service/Gisbuy.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Final } from '../Model/Final.model';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
user:Product
userss:string="arunanand307@gmail.com"
add:boolean
observe:Observable<any>
result:string
  constructor(private gisbuyService:GisbuyService,private myActivate:ActivatedRoute) {

   }
addtocart(user)
{
  console.log(user)
 if(this.gisbuyService.AddtoCart(this.userss,user))
this.result="Successfully added to cart"
else
this.result="Unable to Add"


}
  ngOnInit()
  {
   
    var ptype;
    
    this.myActivate.params.subscribe((p)=>{
      ptype=p["ptype"]
     this.gisbuyService.GetDataByType(ptype).subscribe((res=>{
       this.user=res;
       //debugger;
       console.log(this.user)
     }))
      
    })
  }

}
