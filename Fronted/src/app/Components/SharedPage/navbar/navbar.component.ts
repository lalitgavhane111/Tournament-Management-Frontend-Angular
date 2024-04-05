import { Component } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';

declare const myFun:any
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  slider(){
    myFun();
  }

  constructor(private auth : AuthService){ 
      
  }
  Onlogout(){
    this.auth.logout()
  }

  
}
