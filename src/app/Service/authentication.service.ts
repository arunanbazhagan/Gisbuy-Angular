import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { Gisbuy } from 'app/Model/Gisbuy.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {environment} from '../environments/environment'

@Injectable({providedIn:'root'})
export class AuthenticationService{
    private currentUserSubject:BehaviorSubject<Gisbuy>
    public currentUser:Observable<Gisbuy>
    constructor(private http:HttpClient)
    {
this.currentUserSubject=new BehaviorSubject<Gisbuy>(JSON.parse(localStorage.getItem('currentUser')));
this.currentUser=this.currentUserSubject.asObservable();

    }
    public get currentUserValue():Gisbuy
    {
        return this.currentUserSubject.value;
    }
    login(username:string,password:string)
    {
        return this.http.post<any>('${environment.apiUrl}/users/authenticate',{username,password}).pipe(map(user=>{
           
            localStorage.setItem('currentUser',JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }))
    }
    logout()
    {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}