import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {NgToastService} from 'ng-angular-popup';
import { AuthService } from '../Service/auth.service';
import { Route,Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router,private toast:NgToastService){}
  canActivate(): boolean{
      if(this.auth.isLoggedIn()){
return true;
      }
      else{
        return false;
      }
    
  }
  
}
