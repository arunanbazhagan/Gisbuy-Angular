import { Component, OnInit } from '@angular/core';
import { GisbuyService } from '../Service/Gisbuy.service';
import{Gisbuy} from'../Model/Gisbuy.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { idcheckin } from './idcheckin';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'app/Service/authentication.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
user:Gisbuy
result:string
myForm:FormGroup;
loginValue: any;
value: any;
mode: boolean = false;
  constructor(private authenticationService:AuthenticationService, private gisbuyService:GisbuyService,private myRoutes:Router,private toaster:ToastrService) { 
this.user=new Gisbuy()

this.myForm=new FormGroup({adminid:new FormControl(null,[Validators.required,idcheckin.checkId]),
  adminpass:new FormControl(null,[Validators.required])})
  }
login()
{ 

  this.gisbuyService.Adminlogin(this.user).subscribe(res => {
    console.log(res)
    if(res===true)
    {
      this.myRoutes.navigate(['/addproduct']);
      this.toaster.success("Welcome")
    }
    else
    {
      this.result="Invalid Id or Password"
      this.toaster.warning("Invalid Password or Id")
    }
  })  
}

  ngOnInit() {
  }

}
