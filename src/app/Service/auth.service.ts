import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string ='https://backendtour.azurewebsites.net/api/Users';
  private loginUrl = 'https://backendtour.azurewebsites.net/api/Users/login';
  private signupUrl = 'https://backendtour.azurewebsites.net/api/Users';
  constructor(private http: HttpClient, private router : Router) { }
  
  signUp(userObj: any){
    return this.http.post<any>(this.signupUrl, userObj)
  }

    login(loginObj: any){
      return this.http.post<any>(this.loginUrl, loginObj)

    }
    logout(){
      localStorage.removeItem('token');
      localStorage.clear();
      this.router.navigate(['login']);
    }

    setusername(Role : string){
      localStorage.setItem('role', Role)
       }
      
      
      
       getusername(){
       return localStorage.getItem('role');
       }

    storeToken(tokenValue : string){
      localStorage.setItem('token',tokenValue);
      console.log(this.storeToken);
    }

    getToken(){
      return localStorage.getItem('token');
      console.log(this.getToken);
    }

    isLoggedIn(): boolean{
      return !!localStorage.getItem('token');
    }
}
