import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class transactionService {
  constructor(private http: HttpClient) {
    
  }

  GetTransactions(accountNumber: any){
    return this.http.get('/MyApi/Transactions/GetTransactions', accountNumber);
  }

}