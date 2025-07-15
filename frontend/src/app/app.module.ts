import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FooterComponent } from './components/footer/footer.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { RequestItemComponent } from './components/request-item/request-item.component'
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component'
import { AuthInterceptor } from './utils/auth.interceptor'
import { EditRequestModalComponent } from './components/edit-request-modal/edit-request-modal.component'
import { RequestModalComponent } from './components/request-modal/request.component'
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    EditRequestModalComponent,
    FooterComponent,
    LoginComponent,
    IfAuthenticatedDirective,
    NavbarComponent,
    RegisterComponent,
    RequestModalComponent,
    UserDashboardComponent,
    RequestItemComponent,
    AdminDashboardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
