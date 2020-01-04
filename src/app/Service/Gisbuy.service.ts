import {Gisbuy} from '../Model/Gisbuy.model'
import { HttpClient,HttpResponse } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { Product } from '../Model/Product.model';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import {environment} from '../environments/environment';
import { Final } from '../Model/Final.model';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({providedIn:'root'})
export class GisbuyService{
    user:any
    form:Product
    users:string[]
    list:Product[]
    email:string="arunanand307@gmail.com"
    private currentUserSubject:BehaviorSubject<Gisbuy>
   public currentUser:Observable<Gisbuy>
    constructor(private myHttp:HttpClient,private router:Router)
    {
        this.currentUserSubject=new BehaviorSubject<Gisbuy>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser=this.currentUserSubject.asObservable();
    }
    public get currentUserValue():Gisbuy
     {
         return this.currentUserSubject.value;
    }
    CancelYourOrder(statusid:number):Observable<any>
    {
        return this.myHttp.delete("https://localhost:44399/api/Third?statusid="+statusid)
    }
    YourOrder():Observable<any>
    {
        return this.myHttp.get("https://localhost:44399/api/Third?email="+this.email)

    }
    AddtoCart(email:string,user:Product):Observable<any>
    {
        
      console.log(user)
    
         this.user=this.myHttp.post("https://localhost:44399/api/Values?email="+email,user).subscribe((res=>{
            console.log(res)
        }))
        return this.user
    }
    GetAllProduct()
    {
        
        this.myHttp.get("https://localhost:44399/api/Third").toPromise().then(res=>this.list=res as Product[])
    }
    GetDataByType(user:string):Observable<any>
    {
        return this.myHttp.get("https://localhost:44399/api/Second?type="+user)
    }
    AddProduct(users:Product[]):Observable<any>
    {
        debugger
         return  this.user=  this.myHttp.post("https://localhost:44399/api/Values",users)
    }
   DeleteProduct(user:string):Observable<any>
   {
      return this.myHttp.delete("https://localhost:44399/api/Values?proid="+user)
          
   } 
   UpdateTheProduct(user:Product):Observable<any>
   {
console.log(user)
       return this.myHttp.put("https://localhost:44399/api/Values",user)
   }
   UpdateProduct(user:string):Observable<any>
   {
    return this.myHttp.get("https://localhost:44399/api/Values?proid="+user)
   }
    Adminlogin(user:Gisbuy):Observable<any>
    {
        return this.myHttp.get("https://localhost:44399/api/Values?adminid="+user.Adminid+"&adminpass="+user.Adminpass)
    }
     Aadminlogin(user:Gisbuy):Observable<any>
      {
          debugger
          console.log(user)
          return this.myHttp.post<any>(`${environment.apiUrl}/api/Values`,user)
          .pipe(tap(user=>{
           //console.log('header',user.headers.get('JWT_TOKEN'));
          // user.authdata=window.btoa(user)
             localStorage.setItem('currentUser',JSON.stringify(user));
          }))
            //   this.currentUserSubject.next(user);
            //   return user;
        //   }))
     }
    logout()
     {
         localStorage.removeItem('currentUser');
         this.currentUserSubject.next(null);
         this.router.navigate(['/'])
     }
}

// import { Injectable } from "@angular/core";
// import { BehaviorSubject, Observable } from 'rxjs';
// import { Gisbuy } from 'app/Model/Gisbuy.model';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';


// @Injectable({providedIn:'root'})
// export class AuthenticationService{
//     private currentUserSubject:BehaviorSubject<Gisbuy>
//     public currentUser:Observable<Gisbuy>
//     constructor(private http:HttpClient)
//     {
// this.currentUserSubject=new BehaviorSubject<Gisbuy>(JSON.parse(localStorage.getItem('currentUser')));
// this.currentUser=this.currentUserSubject.asObservable();

//     }
//     public get currentUserValue():Gisbuy
//     {
//         return this.currentUserSubject.value;
//     }
//     login(username:string,password:string)
//     {
//         return this.http.post<any>('${environment.apiUrl}/users/authenticate',{username,password}).pipe(map(user=>{
           
//             localStorage.setItem('currentUser',JSON.stringify(user));
//             this.currentUserSubject.next(user);
//             return user;
//         }))
//     }
//     logout()
//     {
//         localStorage.removeItem('currentUser');
//         this.currentUserSubject.next(null);
//     }
// }