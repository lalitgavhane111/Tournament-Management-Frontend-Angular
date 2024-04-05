import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './Components/employees/employees.component';
import { HomeComponent } from './Components/User/home/home.component';
import { TournamentDetailsComponent } from './Components/User/tournament-details/tournament-details.component';
import { NavbarComponent } from './Components/SharedPage/navbar/navbar.component';
import { TeamDetailsComponent } from './Components/User/team-details/team-details.component';
import { FooterComponent } from './Components/SharedPage/footer/footer.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './Components/SharedPage/login/login.component';
import { SignupComponent } from './Components/SharedPage/signup/signup.component';
import { DashboardComponent } from './Components/SharedPage/dashboard/dashboard.component';
import { TeamRequestComponent } from './Components/User/team-request/team-request.component';
import { MatchesComponent } from './Components/User/matches/matches.component';
import { AboutusComponent } from './Components/User/aboutus/aboutus.component';
import { AddTeamComponent } from './Components/admin/add-team/add-team.component';
import { AddPlayerComponent } from './Components/admin/add-player/add-player.component';
import { ViewPlayersComponent } from './Components/admin/view-players/view-players.component';
import { CreateTournamentComponent } from './Components/admin/create-tournament/create-tournament.component';
import { ViewTournamentsComponent } from './Components/admin/view-tournaments/view-tournaments.component';
import { ViewTeamsComponent } from './Components/admin/view-teams/view-teams.component';
import { ViewTeamComponent } from './Components/admin/view-team/view-team.component';
import { ManageRequestsComponent } from './Components/admin/manage-requests/manage-requests.component';
import { EditMatchComponent } from './Components/admin/edit-match/edit-match.component';
import { EditTeamComponent } from './Components/admin/edit-team/edit-team.component';
import { EditTournamentComponent } from './Components/admin/edit-tournament/edit-tournament.component';
import { PlayerStatsComponent } from './Components/admin/player-stats/player-stats.component';
import { ManageTournamentTeamsComponent } from './Components/admin/manage-tournament-teams/manage-tournament-teams.component';
import { EditPlayerComponent } from './Components/admin/edit-player/edit-player.component';
import { AdminDashboardComponent } from './Components/admin/admin-dashboard/admin-dashboard.component';
import { TournamentServiceComponent } from './Components/User/tournament-service/tournament-service.component';
import { HomePagesComponent } from './Components/User/home-pages/home-pages.component';
import { RegisterAsPlayerComponent } from './Components/User/register-as-player/register-as-player.component';
import { SendRequestComponent } from './Components/User/send-request/send-request.component';
import { RequestsStatusComponent } from './Components/User/requests-status/requests-status.component';
import { TournamentMatchesComponent } from './Components/User/tournament-matches/tournament-matches.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'home', component: HomePagesComponent },

  { path: 'tournament-details', component: TournamentDetailsComponent },
  { path: 'team-details', component: TeamDetailsComponent },
  {path : 'signup' , component:SignupComponent},
  { path :'tournaments' , component:MatchesComponent},
  {path : 'teams' , component:TournamentServiceComponent},
  {path : 'team-request',component:TeamRequestComponent},
  {path : 'aboutus' , component:AboutusComponent},
  {path : 'login' , component:LoginComponent},
  {path : 'navbar', component: NavbarComponent},
  {path :'register-as-player' , component: RegisterAsPlayerComponent},
  { path : 'send-request', component: SendRequestComponent},
  { path: 'requests-status', component: RequestsStatusComponent},
  { path: 'tournaments/:id/matches', component: TournamentMatchesComponent}
 
  // Add other routes here

  // //admin routes 
,
   
    {
    path : 'admin-dashboard', component:AdminDashboardComponent,
    children: [
      
     { path: 'add-player', component:AddPlayerComponent 
     },
     { path: 'add-team', component: AddTeamComponent
     },
     {
       path: 'create-tournament', component: CreateTournamentComponent
     },
     {
       path: 'view-tournaments/:id/manage/:id2/edit', component: EditMatchComponent
     },
     
     {
       path: 'view-players/:id/edit',component: EditPlayerComponent
     },

     {
       path: 'view-teams/:id/edit',component: EditTeamComponent
     },
     {
       path: 'view-tournaments/:id/edit',component: EditTournamentComponent
     },
     {
       path : 'view-players' , component:ViewPlayersComponent
     },
     {
         path: 'team-requests',component: ManageRequestsComponent
       },
       
    {
         path: 'view-tournaments/:id/manage',component: ManageTournamentTeamsComponent
     }, 
    {
        path: 'view-players/:id/stats',component: PlayerStatsComponent      
    },
           
     {
       path: 'view-teams/:id/view-players', component: ViewTeamComponent          
     },
    {
      path : 'view-tournaments', component: ViewTournamentsComponent
    },
    {
      path: 'view-teams', component: ViewTeamsComponent 
    }
   
    ]
  }
  
 


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
