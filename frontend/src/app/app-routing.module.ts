import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { authGuard } from './guards/auth.guard'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component'

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
