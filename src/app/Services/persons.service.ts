import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PersonService {
  constructor(private http: HttpClient) {
    
  }

  GetPersonDetails(personId: any){
    return this.http.get('/MyApi/Person/GetPerson', personId);
  }

  CreatePerson(credentials: any) { 
    return this.http.put('/MyApI/Person/CreatePerson', JSON.stringify(credentials));
  }

  EditPerson(credentials: any){
    return this.http.put('/MyApi/Person/UpdatePerson',JSON.stringify(credentials));
  }

  DeletePerson(personId: any){
    return this.http.delete('MyApi/Person/DeletePerson', personId);
  }

}