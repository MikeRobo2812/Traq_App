import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {
    
  }

  GetPersonAccounts(personId: any){
    return this.http.get('/MyApi/Account/GetPersonAccounts', personId)
  }

  CreateAccount(details: any){
    return this.http.put('/MyApi/Account/CreateAccount', JSON.stringify(details));
  }

  UpdateAccount(details: any){
    return this.http.put('/MyApi/Account/UpdateAccount', JSON.stringify(details));
  }

  GetAccountDetails(accountNumber: any){
    return this.http.get('/MyApi/Account/GetAccountDetials', accountNumber);
  }

}