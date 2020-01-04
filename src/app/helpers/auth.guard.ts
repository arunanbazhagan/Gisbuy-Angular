import { Injectable } from "@angular/core";
import { CanActivate, Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import {GisbuyService} from '../Service/Gisbuy.service';

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
    constructor(private router:Router,
        private authenticationService:GisbuyService)
    {}
    canActivate(route: ActivatedRouteSnapshot,state:RouterStateSnapshot)
    {
        const currentUser=localStorage.getItem('currentUser');
        if(currentUser!=null)
        {
            return true;
        }
        this.router.navigate(['/homepage'],{queryParams:{returnUrl:state.url}});
        return false;
    }
}