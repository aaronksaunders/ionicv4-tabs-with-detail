import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(private router: Router, private auth: AuthenticationService) { }
  logout() {
    this.auth.setLoggedIn(false)
    this.router.navigateByUrl("/login", { skipLocationChange: true });
  }
}
