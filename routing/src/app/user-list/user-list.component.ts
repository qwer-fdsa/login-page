import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = []; 
  private apiUrl = 'http://localhost:8080/api/users'; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers(); 
  }

  getUsers() {
    this.http.get<User[]>(this.apiUrl).subscribe({
      next: (response) => {
        this.users = response; 
        console.log('Fetched users:', this.users); 
      },
      error: (err) => {
        console.error('Failed to fetch users:', err);
      },
    });
  }
}
