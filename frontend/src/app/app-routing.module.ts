import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { authGuard } from './guards/auth.guard'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component'
import { ParticipantsComponent } from './pages/participants/participants.component'
import { participantGuard } from './guards/participant.guard'
import { organizerGuard } from './guards/organizer.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user-dashboard',
    pathMatch: 'full'
  },
  {
    path: 'user-dashboard',
    canActivate: [authGuard],
    component: UserDashboardComponent
  },
  // {
  //   path: 'participants',
  //   canActivate: [authGuard, participantGuard],
  //   component: ParticipantsComponent
  // },
  // {
  //   path: 'matches',
  //   canActivate: [authGuard, participantGuard],
  //   component: MatchesComponent
  // },
  // {
  //   path: 'manage-matches',
  //   canActivate: [authGuard, organizerGuard],
  //   component: ManageMatchesComponent
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
