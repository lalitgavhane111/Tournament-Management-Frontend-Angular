import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Route, Router } from '@angular/router';
import ValidatForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/Service/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  type : string = "password";
  isText : Boolean = false;
  eyeIcon : string = "fa-eye-slash";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router : Router, private toast : NgToastService){}
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : ['',Validators.required],
      password : ['',Validators.required]
    })
  }

  OnLogin(){
    if(this.loginForm.valid){
      //console.log(this.loginForm.value)
      //send the obj data to database
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          this.toast.success({detail: "Login success", summary: res.message, duration: 5000})
          this.loginForm.reset();
          const data = {
            token : res.token,
            id :  res.id,
            username : res.username,
            email : res.email,
            role : res.role
          }

          localStorage.setItem('id',data.id);
          localStorage.setItem('token',data.token);
          localStorage.setItem('username',data.username);
          localStorage.setItem('role',data.role);

          this.auth.storeToken(res.token);
          // this.router.navigate(['home-pages']);
          
         // this.auth.getusername(res.Role);
          const role = localStorage.getItem('role')
          console.log(res.email);
         if (data.role == "admin") {
          this.router.navigate(['/admin-dashboard']);
          
           } else {
            this.router.navigate(['/home']);
 }
          
      },
      error:(err) =>{
        this.toast.error({detail: "Login Failed", summary:"Please enter valid credentials", duration: 5000})
        //console.log(err);
      }
        
    })
      

    }
    else{
      //console.log("form is not valid")
      //throw error using toaster with required fields
      ValidatForm.validateAllFormFields(this.loginForm);
      
    }
  }


  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  
  

}