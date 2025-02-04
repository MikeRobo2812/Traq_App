import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-persons',
  imports: [],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css'
})
export class PersonsComponent {
  persons: [] | any;

  constructor(private http: HttpClient) {
    http.get('MyApi/Persons/GetAllPersons')
      .subscribe(response => {
            this.persons = response;
      })
  }
}
