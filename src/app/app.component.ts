import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // holds value of users log in status
  private isLoggedIn: Boolean;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.authState.subscribe(
      (auth) => {
        if(auth == null){
          //not logged in
          this.isLoggedIn = false;
          this.router.navigate(['home']);
        }else{
          //logged in
          this.isLoggedIn = true;
          this.router.navigate(['account']);
        }
      }
    )
  }

  logout() {
    this.authService.signOut();
    this.router.navigate(['home']);
  }
}
