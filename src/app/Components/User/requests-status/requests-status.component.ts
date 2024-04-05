import { Component } from '@angular/core';
import { UsersideServiceService } from 'src/app/Service/userside-service.service';

@Component({
  selector: 'app-requests-status',
  templateUrl: './requests-status.component.html',
  styleUrls: ['./requests-status.component.css']
})

export class RequestsStatusComponent {
  playerId: number = 0;

  allPlayersData: any;
  allRequestsData: any;

  localStorageUserId : number; 

  requestsDataForCurrentUser: any = []; //This will be having team Requests for logged player

  constructor(private service: UsersideServiceService) {

    this.localStorageUserId = Number(localStorage.getItem('id'))

    this.service.getTeamRequests().subscribe(x => {
      this.allRequestsData = x;
      console.log(this.allRequestsData);

      this.requestsDataForCurrentUser = this.allRequestsData.filter(
        (request: any)=> request.player.userId === this.localStorageUserId
      );

      // for(var i=0; i<this.allRequestsData.length; i++){
      //   console.log('userId:', this.allRequestsData[i].player.userId);
      //   console.log('localStorageUserId:', this.localStorageUserId);
      //   if(this.allRequestsData[i].player.userId == this.localStorageUserId){
      //     this.requestsDataForCurrentUser.push(this.allRequestsData[i]);
      //   }
      // }
      console.log(this.requestsDataForCurrentUser);
    });
   
  }
  
  deleteRequest(requestId: number){
    console.log(requestId);
    if(confirm('Are you sure you want to cancel request?')){
      this.service.deleteRequestById(requestId).subscribe(x => {
        // window.location.reload();
        this.requestsDataForCurrentUser = this.requestsDataForCurrentUser.filter(
          (request: any) => request.id !== requestId
        );
      })
    } 
  }

  logout(){
    localStorage.clear();
  }
}
