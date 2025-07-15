import { Component } from '@angular/core'
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'requests-frontend'

  currentUser$ = this.authSrv.currentUser$

  constructor(protected authSrv: AuthService) {}

  logout() {
    this.authSrv.logout()
  }
}
