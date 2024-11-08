import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = { username: '', password: '' };
  private apiUrl = 'http://localhost:8080/api/users/register';
  errorMessage: string = ''; // To store error messages

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    // Reset error message
    this.errorMessage = '';

    if (!this.user.username || !this.user.password) {
        this.errorMessage = 'Both fields are required!';
        return; // Prevent submission if fields are empty
    }

    this.http.post<{ message: string }>(this.apiUrl, this.user).subscribe({
        next: (response) => {
            console.log('Registration successful:', response.message);
            this.router.navigate(['/login']);
        },
        error: (err) => {
            console.error('Registration failed:', err);
            // Assuming the response is a JSON object with a "message" property
            this.errorMessage = err.error?.message || 'Registration failed. Please try again.';
        }
    });
}

}
