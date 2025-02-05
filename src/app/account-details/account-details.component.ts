import { Component } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../Services/account.service';
import { FormsModule } from '@angular/forms';
import { transactionService } from '../Services/transaction.service';

@Component({
  selector: 'app-account-details',
  imports: [FormsModule],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.css'
})
export class AccountDetailsComponent {
  AccountDetails: [] | any;
  transactions: [] | any;

  constructor(private route: ActivatedRoute, private router: Router, private accountService: AccountService, private transactionService: transactionService) {}

  ngOnInit(): void {
    const accountNumber = this.route.snapshot.paramMap.get('accountNumber');
    this.accountService.GetAccountDetails(accountNumber).subscribe(result => {
      this.AccountDetails = result;
    })
    this.transactionService.GetTransactions(accountNumber).subscribe(result => {
      this.transactions = result;
    })

  }

  saveChanges() {
    alert('Account details updated successfully!');
  }

  goToTransactionDetails(transactionId: number) {
    this.router.navigate(['/transaction', transactionId]);
  }
}
