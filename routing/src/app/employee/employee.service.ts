import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getUser() {
    return [
      { id: 1, FirstName: 'Anket',LastName:'kumar', email:'anket@gmail.com' },
      { id: 2, FirstName: 'Chandan',LastName:'Kumar',email:'chandan8043@gmail.com'},
      { id: 3, FirstName: 'Pintu', LastName:'kumar',email:'pintu@gmail.com' },
      { id: 4, FirstName: 'Anil',LastName:'Kumar', email:'anil@gmail.com' },
      { id: 5, FirstName: 'Bibhav',LastName:'Pandey', email:'bibhav@gmail.com' },
      { id: 6, FirstName: 'Roushan',LastName:'Gupta', email:'roushan@gmail.com' }
    ];
  }
  constructor() { }
}