import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CustomDirective } from './custom.directive';
import { CustomPipe } from './custom.pipe';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { TemplateDrivenFormDemoComponent } from './template-driven-form-demo/template-driven-form-demo.component'
import { RouteGuard, RouteGuard2 } from './guards/routeguard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CustomDirective,
    CustomPipe,
    NotfoundComponent,
    EmployeeComponent,
    TemplateDrivenFormDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RouteGuard, RouteGuard2],
  bootstrap: [AppComponent]
})
export class AppModule { }
