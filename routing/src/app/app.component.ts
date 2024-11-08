import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,RegisterComponent,UserListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Correct plural form, array syntax
})
export class AppComponent {
  title = 'routing';
}
