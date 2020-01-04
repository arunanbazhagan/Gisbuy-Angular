import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Model/Product.model';
import { GisbuyService } from '../Service/Gisbuy.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Final } from '../Model/Final.model';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
user:Product
users:Product
id:any=[];
  constructor(private httpService:HttpClient,private gisbuyService:GisbuyService,private myActivate:ActivatedRoute,private toastr:ToastrService) 
  {

  }
update(form)
{
  console.log(form.value)
  this.gisbuyService.UpdateTheProduct(form.value).subscribe((res=>{
    if(res==true)
    {
      this.toastr.success("Updated Successfully","Excited Product")
      this.resetForm()
    }
    else
    {
      this.toastr.warning("Unable To Update Check Product Id","Excited Product")
      
    }
  }))
  
}

  ngOnInit() 
  {
    this.resetForm();
     if(!this.user)
     var pid;
    
     this.myActivate.params.subscribe((p)=>{
       pid=p["pmid"]
      this.gisbuyService.UpdateProduct(pid).subscribe((res=>{
        this.users=res;
        //debugger;
        console.log(this.users)
      }))
      
     })
    
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
getAllProduct()
{
  let arr:any=this.gisbuyService.list;
  if(this.id.length===0)
  {
    arr.forEach(obj=>{
      this.id.push(obj.Proid);
    });
  }
  console.log(this.gisbuyService.list)
}
onSubmit(form:NgForm)
{
  this.getAllProduct();
  if(this.id.indexOf(this.gisbuyService.form.Proid)===-1)
  this.AddProduct(form);
  else
  this.toastr.warning("Product Id is present in the database")
}
AddProduct(form:NgForm)
{
  this.gisbuyService.AddProduct(form.value).subscribe(res=>
    {
      if(res==true)
      {
      this.toastr.success("Added Successfully","New Product")
      this.resetForm(form);
      this.gisbuyService.GetAllProduct()
      }
      else
      {
        this.toastr.warning("Unable to Add Check The Product Id","New Product")
      this.resetForm(form);
      this.gisbuyService.GetAllProduct()
      }
    })
}
UpdateTheProduct(form:NgForm)
{
  this.gisbuyService.UpdateTheProduct(form.value).subscribe(res=>{
    this.toastr.info("Updated Successfully","Excited Product")
    this.resetForm(form)
    this.gisbuyService.GetAllProduct()
  })
}
}
