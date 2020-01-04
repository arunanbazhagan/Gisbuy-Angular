// import { Injectable } from "@angular/core";
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import {delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

// @Injectable()
// export class FakeBackendInterceptor implements HttpInterceptor{
//     intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
//     {
//         const{url,method,headers,body}=request;
//         return of(null)
//         .pipe(mergeMap(handleRoute))
//         .pipe(materialize())
//         .pipe(delay(500))
//         .pipe(dematerialize());

//         function handleRoute()
//         {
//             switch(true){
//                 case url.endsWith('/users/authentication')&& method=='POST':
//                     return authenticate();
//                     case url.endsWith('/users') && method==='GET':
//                         return getUsers();
//                         default:
//                             return next.handle(request);
//             }
//         }
//         function authenticate()
//         {
//             const {username,password}=body;
//             const user =users.find
//         }
//     }
// }