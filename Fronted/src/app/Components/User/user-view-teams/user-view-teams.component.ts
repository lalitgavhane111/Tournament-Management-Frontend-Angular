import { Component } from '@angular/core';
import { UsersideServiceService } from 'src/app/Service/userside-service.service';


@Component({
  selector: 'app-user-view-teams',
  templateUrl: './user-view-teams.component.html',
  styleUrls: ['./user-view-teams.component.css']
})

export class UserViewTeamsComponent {
  teams: any;

  constructor(private service: UsersideServiceService){
  
    this.service.getTeamsData().subscribe(x => {
      this.teams = x;
      console.log(this.teams);
    })
  }
}
