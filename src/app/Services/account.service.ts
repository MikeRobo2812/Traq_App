import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {
    
  }

  GetPersonAccounts(personId: any){
    return this.http.get('/MyApi/Account/GetPersonAccounts', personId)
  }

}