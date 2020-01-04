import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {AuthenticationService} from '../Service/authentication.service';
import { GisbuyService } from 'app/Service/Gisbuy.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
    // private token:string
    constructor(private authenticationService:AuthenticationService,private gisbuyService:GisbuyService,private router:Router)
    {

    }
    intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
    {
        console.log('INTERCEPTOR')
        //add authorization header with basic auth credentials if available
        debugger
        let currentUser=localStorage.getItem('currentUser')
        console.log(currentUser)
        if(currentUser!=null)
        {
             const clone=request.clone({
                 headers:request.headers.set("Authorization","Bearer "+localStorage.getItem('currentUser'))
             })
              return next.handle(clone).pipe(tap(
                 succ=>{},
                 err=>{
                     if(err.status===401)
                     this.router.navigate(['/']);
                 }
             ))
         }
         else{
             this.router.navigate(['/'])
         }
            //  request=request.clone({
            //      headers:new HttpHeaders(currentUser)
            //  });
            // return next.handle(request);
        
       
    }
}