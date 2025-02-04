import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  invalidLogin: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService){}

    signIn(credentials) {
      this.authService.login(credentials)
        .subscribe(result => { 
          if (result)
            this.router.navigate(['/persons']);
          else  
            this.invalidLogin = true; 
        });
    }
}
