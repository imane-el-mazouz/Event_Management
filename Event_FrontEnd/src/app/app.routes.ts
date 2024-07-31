import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
// import { UserListComponent } from "../app/components/user/user-list/user-list.component";
// import {UserFormComponent} from "./user/user-form/user-form.component";
// import {UpdateUserFormComponent} from "./user/user-update/user-update.component";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/singup/singup.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import { EventListComponent} from "./components/event/event-list/event-list.component";
import { AboutListComponent} from "./components/about/about-list/about-list.component";
import {ContactFormComponent} from "./components/contact/contact-form/contact-form.component";
import {ProfileComponent} from "./components/profile/profile/profile.component";
import {ReservationListComponent} from "./components/reservation/reservation-list/reservation-list.component";
import {ReservationFormComponent} from "./components/reservation/reservation-form/reservation-form.component";
import {ContactListComponent} from "./components/contact/contact-list/contact-list.component";

export const routes: Routes = [
 // { path: 'users', component:  },
  { path: 'home', component: HomeComponent },
  // { path: 'updateUser/:id', component:  },

  { path: 'events', component: EventListComponent },
  { path: 'about', component: AboutListComponent },
  { path: 'contact', component: ContactListComponent },
  { path: 'addC', component: ContactFormComponent },

  { path: 'login', component: LoginComponent },
  { path : 'signup' , component: SignupComponent},
  { path : 'dashboard' , component: DashboardComponent},
  { path : 'profile' , component : ProfileComponent},


  { path : 'reservations' , component : ReservationListComponent},
  { path : 'addR' , component : ReservationFormComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
