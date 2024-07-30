import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
// import { UserListComponent } from "../app/components/user/user-list/user-list.component";
// import {UserFormComponent} from "./user/user-form/user-form.component";
// import {UpdateUserFormComponent} from "./user/user-update/user-update.component";
import {LoginComponent} from "../../src/app/components/login/login.component";
import {SignupComponent} from "../../src/app/components/singup/singup.component";

export const routes: Routes = [
 // { path: 'users', component:  },
  { path: 'home', component: HomeComponent },
  // { path: 'updateUser/:id', component:  },

  { path: 'login', component: LoginComponent },
  { path : 'signup' , component: SignupComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
