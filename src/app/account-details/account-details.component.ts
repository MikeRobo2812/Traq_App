import { Component } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-account-details',
  imports: [],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.css'
})
export class AccountDetailsComponent {
  AccountDetails: [] | any;

  constructor(private route: ActivatedRoute, private router: Router, private accountService: AccountService) {}

  ngOnInit(): void {
    const accountNumber = this.route.snapshot.paramMap.get('accountNumber');
    this.accountService.GetAccountDetails(accountNumber).subscribe(result => {
      this.AccountDetails = result;
    })
  }

  saveChanges() {
    alert('Account details updated successfully!');
  }
}
