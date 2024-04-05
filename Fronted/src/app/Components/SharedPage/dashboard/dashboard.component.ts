import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public users:any=[];
  constructor(private api : ApiService, private auth: AuthService){ }

  ngOnInit(){
    this.api.getUsers()
    .subscribe(res =>{
      this.users = res;
    },
    (err) => {
      console.log(err); // Handle the error here
      
    
    })

    
  }
  
    
}

