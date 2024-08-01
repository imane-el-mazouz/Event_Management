
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent} from "./components/navbar/navbar.component";
import { FooterComponent} from "./components/footer/footer.component";
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ProfileService } from './service/profile_service/profile.service';
//import {  } from './service/auth_interceptor/auth-interceptor-service.service.spec';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {AuthInterceptorService} from "./service/auth_interceptor/auth-interceptor-service.service";
import {MatDividerModule} from "@angular/material/divider";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";

let MatLuxonDateModule;

@NgModule({
  declarations: [


  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppComponent,
    NavbarComponent,
    BrowserModule,
    AppComponent,
    MatDividerModule,
    MatNativeDateModule,
    MatCardModule

],
  providers: [
    ProfileService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: []
})
export class AppModule { }
