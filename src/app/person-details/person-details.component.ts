import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-person-details',
  imports: [],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent {
  accounts: [] | any;

  constructor(private route: ActivatedRoute, private accountService: AccountService) {

  }

  ngOnInit(): void {
    const personId = Number(this.route.snapshot.paramMap.get('id'));
    this.accountService.GetPersonAccounts(personId).subscribe(result => {
      this.accounts = result;
    });
  }
}
