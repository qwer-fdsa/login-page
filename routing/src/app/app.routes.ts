import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  {path :'Empls', component:EmployeeListComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'register',component:RegisterComponent},
  {path:'user-list',component:UserListComponent}

];