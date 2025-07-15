import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CategoryItemComponent } from './components/category-item/category-item.component'
import { CategoryModalComponent } from './components/category-modal/category-modal.component'
import { EditCategoryModalComponent } from './components/edit-category-modal/edit-category-modal.component'
import { EditRequestModalComponent } from './components/edit-request-modal/edit-request-modal.component'
import { FooterComponent } from './components/footer/footer.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { RequestItemComponent } from './components/request-item/request-item.component'
import { RequestModalComponent } from './components/request-modal/request-modal.component'
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive'
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component'
import { LoginComponent } from './pages/login/login.component'
import { ManageCategoriesComponent } from './pages/manage-categories/manage-categories.component'
import { RegisterComponent } from './pages/register/register.component'
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component'
import { AuthInterceptor } from './utils/auth.interceptor'

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
    AdminDashboardComponent,
    ManageCategoriesComponent,
    CategoryItemComponent,
    CategoryModalComponent,
    EditCategoryModalComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
