import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  users: any[] = [];

  constructor(private EmployeeService: EmployeeService) { }

  ngOnInit(): void {
    this.users = this.EmployeeService.getUser();
  }
}