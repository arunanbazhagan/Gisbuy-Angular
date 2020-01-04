import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import {GisbuyService} from '../Service/Gisbuy.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    constructor(private authenticationService:GisbuyService,private router:Router){}
    intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        // if(request.headers.get('No-Auth')=="True")
        // return next.handle(request.clone());
        // if(localStorage.getItem('currentUser')!=null)
        // {
        //     const clone=request.clone({
        //         headers:request.headers.set("Authorization","Bearer"+localStorage.getItem('currentUser'))
        //     })
        //     return next.handle(clone).pipe(tap(
        //         succ=>{},
        //         err=>{
        //             if(err.status===401)
        //             this.router.navigate(['/']);
        //         }
        //     ))
        // }
        // else{
        //     this.router.navigate(['/'])
        // }


         return next.handle(request).pipe(catchError(err=>{
             if(err.status === 401)
             {
                 this.authenticationService.logout();
                 location.reload(true)
             }
             const error=err.error.message||err.statusText;
             return throwError(error)
         }))
    }
    
}