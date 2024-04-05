import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import{ ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './Components/User/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './Components/SharedPage/navbar/navbar.component';
import { FooterComponent } from './Components/SharedPage/footer/footer.component';
import { TournamentDetailsComponent } from './Components/User/tournament-details/tournament-details.component';
import { TeamDetailsComponent } from './Components/User/team-details/team-details.component';
import { LoginComponent } from './Components/SharedPage/login/login.component';
import { SignupComponent } from './Components/SharedPage/signup/signup.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './Components/SharedPage/dashboard/dashboard.component';
import { NgToastModule } from 'ng-angular-popup';
import { TokenInterceptor } from './intercepter/token.interceptor';
import { Token } from '@angular/compiler';
import { TeamRequestComponent } from './Components/User/team-request/team-request.component';
import { MatchesComponent } from './Components/User/matches/matches.component';
import { AboutusComponent } from './Components/User/aboutus/aboutus.component';
import { AddPlayerComponent } from './Components/admin/add-player/add-player.component';
import { AddTeamComponent } from './Components/admin/add-team/add-team.component';
import { AdminDashboardComponent } from './Components/admin/admin-dashboard/admin-dashboard.component';
import { CreateTournamentComponent } from './Components/admin/create-tournament/create-tournament.component';
import { EditMatchComponent } from './Components/admin/edit-match/edit-match.component';
import { EditPlayerComponent } from './Components/admin/edit-player/edit-player.component';
import { EditTeamComponent } from './Components/admin/edit-team/edit-team.component';
import { EditTournamentComponent } from './Components/admin/edit-tournament/edit-tournament.component';
import { ManageRequestsComponent } from './Components/admin/manage-requests/manage-requests.component';
import { ManageTournamentTeamsComponent } from './Components/admin/manage-tournament-teams/manage-tournament-teams.component';
import { PlayerStatsComponent } from './Components/admin/player-stats/player-stats.component';
import { ViewPlayersComponent } from './Components/admin/view-players/view-players.component';
import { ViewTeamComponent } from './Components/admin/view-team/view-team.component';
import { ViewTeamsComponent } from './Components/admin/view-teams/view-teams.component';
import { ViewTournamentsComponent } from './Components/admin/view-tournaments/view-tournaments.component';
import { TournamentServiceComponent } from './Components/User/tournament-service/tournament-service.component';
import { HomePagesComponent } from './Components/User/home-pages/home-pages.component';
import { SendRequestComponent } from './Components/User/send-request/send-request.component';
import { RegisterAsPlayerComponent } from './Components/User/register-as-player/register-as-player.component';
import { RequestsStatusComponent } from './Components/User/requests-status/requests-status.component';
import { TournamentMatchesComponent } from './Components/User/tournament-matches/tournament-matches.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    TournamentDetailsComponent,
    TeamDetailsComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    TeamRequestComponent,
    MatchesComponent,
    AboutusComponent,
    AddPlayerComponent,
    AddTeamComponent,
    AdminDashboardComponent,
    CreateTournamentComponent,
    EditMatchComponent,
    EditPlayerComponent,
    EditTeamComponent,
    EditTournamentComponent,
    ManageRequestsComponent,
    ManageTournamentTeamsComponent,
    PlayerStatsComponent,
    ViewPlayersComponent,
    ViewTournamentsComponent,
    ViewTeamComponent,
    ViewTeamsComponent,
    TournamentServiceComponent,
    HomePagesComponent,
    SendRequestComponent,
    RegisterAsPlayerComponent,
    RequestsStatusComponent,
    TournamentMatchesComponent
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgToastModule
    
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
