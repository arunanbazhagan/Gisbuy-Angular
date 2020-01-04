import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GisbuyService } from '../Service/Gisbuy.service';
@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
type:string
  constructor(private router:Router,private gisbuyService:GisbuyService) { }
payment(event):any{
this.type=event.target.value
console.log(event.target.value)
this.router.navigate(['sort/type',event.target.value],{skipLocationChange:true})
}
yourorder()
{
  this.router.navigate(['sort/yourorder'],{skipLocationChange:true})
}
  ngOnInit() {
  }

}






