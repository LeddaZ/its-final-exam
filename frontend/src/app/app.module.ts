import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DatepickerComponent } from './components/datepicker/datepicker.component'
import { FooterComponent } from './components/footer/footer.component'
import { MatchModalComponent } from './components/match-modal/match.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { RequestItemComponent } from './components/request-item/request-item.component'
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive'
import { LoginComponent } from './pages/login/login.component'
import { ParticipantsComponent } from './pages/participants/participants.component'
import { RegisterComponent } from './pages/register/register.component'
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component'
import { AuthInterceptor } from './utils/auth.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MatchModalComponent,
    DatepickerComponent,
    LoginComponent,
    IfAuthenticatedDirective,
    NavbarComponent,
    RegisterComponent,
    UserDashboardComponent,
    ParticipantsComponent,
    RequestItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
