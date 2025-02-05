import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonService } from '../Services/persons.service';

@Component({
  selector: 'app-persons',
  providers:[PersonService],
  imports: [FormsModule],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css'
})
export class PersonsComponent {
  persons: [] | any;
  searchTerm: string = '';
  editingPerson: any = null;
  newPerson = {id: null, surname: '', accountNumber: ''};

  constructor(private http: HttpClient, private personService: PersonService) {
    http.get('MyApi/Persons/GetAllPersons')
      .subscribe(response => {
            this.persons = response;
      })
  }

  get filteredPersons() {
    // If no search term, return full list
    if (!this.searchTerm.trim()) {
      return this.persons;
    }

    const lowerCaseSearch = this.searchTerm.toLowerCase();

    return this.persons.filter(person =>
      person.id.toString().includes(lowerCaseSearch) ||
      person.surname.toLowerCase().includes(lowerCaseSearch) ||
      person.accountNumber.toLowerCase().includes(lowerCaseSearch)
    );
  }

  addPerson() {
    if (this.newPerson.id && this.newPerson.surname && this.newPerson.accountNumber) {
      this.persons.push({ ...this.newPerson });
      this.personService.CreatePerson(this.newPerson).subscribe(result => { 
        if (result)
          alert('the user has been created');
        else  
          alert('error creating the user');
      });
      this.newPerson = { id: null, surname: '', accountNumber: '' }; // Reset form
    } else {
      alert('Please enter all fields.');
    }
  }

  editPerson(person: any) {
    this.editingPerson = { ...person };
  }

  savePerson() {
    const index = this.persons.findIndex(person => person.id === this.editingPerson.id);
    if (index !== -1) {
      this.persons[index] = { ...this.editingPerson };
    }
    this.personService.EditPerson(this.editingPerson).subscribe(result => {
      if(result)
        alert('the user was updated');
      else
        alert('an error has occured, please try again');
    });
    this.editingPerson = null;
  }

  deletePerson(personId: number) {
    this.persons = this.persons.filter(person => person.id !== personId);
    this.personService.DeletePerson(personId).subscribe(result => {
      alert(result);
    })
  }

  cancelEdit() {
    this.editingPerson = null;
  }
}
