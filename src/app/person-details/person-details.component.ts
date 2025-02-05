import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../Services/account.service';
import { PersonService } from '../Services/persons.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-details',
  imports: [FormsModule],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent {
  accounts: [] | any;
  person: [] | any;
  isEditingUser: boolean = false;
  newAccount = { accountNumber: '', outstandingBalance: 0 };

  constructor(private route: ActivatedRoute,private router: Router, private accountService: AccountService, private personService: PersonService) {

  }

  ngOnInit(): void {
    const personId = Number(this.route.snapshot.paramMap.get('id'));
    this.personService.GetPersonDetails(personId).subscribe(result => {
      this.person = result;
    })
    this.accountService.GetPersonAccounts(personId).subscribe(result => {
      this.accounts = result;
    });
  }

  toggleEditUser() {
    this.isEditingUser = !this.isEditingUser;
  }

  saveUserInfo() {
    this.isEditingUser = false;
  }

  generateAccountNumber(): string {
    return 'ACC' + Math.floor(100000 + Math.random() * 900000); // Random 6-digit number
  }

  addAccount() {
    if (this.newAccount.outstandingBalance > 0) {
      const newAcc = { accountNumber: this.generateAccountNumber(), outstandingBalance: this.newAccount.outstandingBalance };
      this.accounts.push(newAcc);
      this.accountService.CreateAccount(newAcc).subscribe(result => {
        alert(result);
      })
      this.newAccount = { accountNumber: '', outstandingBalance: 0 };
    } else {
      alert('Please enter a valid outstanding balance.');
    }
  }

  goToAccountDetails(accountNumber: string) {
    this.router.navigate(['/account', accountNumber]);
  }
}
