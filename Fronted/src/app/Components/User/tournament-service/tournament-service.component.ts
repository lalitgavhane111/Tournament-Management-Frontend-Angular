import { Component } from '@angular/core';
import { TournamentServicesService } from 'src/app/Service/tournament-services.service';


@Component({
  selector: 'app-tournament-service',
  templateUrl: './tournament-service.component.html',
  styleUrls: ['./tournament-service.component.css']
})

export class TournamentServiceComponent {
  apiData: any;
  constructor(private getData:  TournamentServicesService ){
    this.getdata();
  }

  getdata(){
    this.getData.getEmployeeDetails().subscribe(x => {
      console.log(x);
      this.apiData = x;
    });
    console.log("1");
  }

  logout(){
    localStorage.clear();
  }
}
