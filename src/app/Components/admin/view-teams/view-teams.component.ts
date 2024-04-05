import { Component } from '@angular/core';
import { TempServiceService } from '../../../Service/temp-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-view-teams',
  templateUrl: './view-teams.component.html',
  styleUrls: ['./view-teams.component.css']
})
export class ViewTeamsComponent {
  teamsData : any;

  constructor(private route: Router,private getData : TempServiceService){
    getData.getTeamDetails().subscribe(x => {
      console.log(x);
      this.teamsData = x;
    }); 
    //this.route.params.subscribe( params => console.log(params));
  }

  public tempFunction(teamId : any){
    console.log(teamId);
    this.route.navigateByUrl(`/admin-dashboard/view-teams/${teamId}`);
  }

  delete(id: number){
    if(confirm("Are you sure you want to delete?"))
    this.getData.deleteTeamById(id).subscribe({
      next : () => {
        // window.location.reload();
          this.teamsData = this.teamsData.filter((team: any) => team.id !== id);
      }, error : (err) => {
          alert("Cannot delete, this team is already part of a tournament");
      },
    });
  }
}
