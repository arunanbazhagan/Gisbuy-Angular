import { Component, OnInit } from '@angular/core';
import { GisbuyService } from '../Service/Gisbuy.service';
import { Final } from '../Model/Final.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-yourorder',
  templateUrl: './yourorder.component.html',
  styleUrls: ['./yourorder.component.css']
})
export class YourorderComponent implements OnInit {
user:Final
users:any
flag:any;
  constructor(private gisbuyService:GisbuyService,private toaster:ToastrService) {
   this.user=new Final();
    this.flag;
   }
   cancelyourorder(statusid)
   {
     console.log(statusid)
     this.gisbuyService.CancelYourOrder(statusid).subscribe((res=>{
       console.log(res)
     }))
     this.user=new Final();
   }
   yourorder()
   {
    this.gisbuyService.YourOrder().subscribe((res=>{
      console.log(res)
      if(res===null)
      {
        
        this.toaster.info("No Item is Added in your Cart")
        
        
      }
      else
      {
        
        this.users=res;
        
      }
      console.log(this.users)
    }))
   }
  ngOnInit() {
    this.yourorder();
  }

}
