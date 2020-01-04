import { Component } from '@angular/core';
import { Gisbuy } from './Model/Gisbuy.model';
import { Router } from '@angular/router';
import {AuthenticationService} from './Service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser:Gisbuy;
  constructor(private router:Router,
    private authenticationService:AuthenticationService)
  {
this.authenticationService.currentUser.subscribe(x=>this.currentUser=x);
  }
  logout()
  {
    this.authenticationService.logout();
    this.router.navigate(['/homepage']);
  }
  title = 'Gisbuy';
}
