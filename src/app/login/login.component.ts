import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  providers:[AuthService],
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  invalidLogin: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService){}

    signIn(credentials: any) {
      this.authService.login(credentials)
        .subscribe(result => { 
          if (result)
            this.router.navigate(['/persons']);
          else  
            this.invalidLogin = true; 
        });
    }
}
