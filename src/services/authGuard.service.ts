
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router, UrlTree } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate(): boolean | UrlTree {
    let value = this.auth.isAuthenticated()
    if (!value) {
      // initially was just redirecting here, but following the documention
      // I updated code to return a UrlTree
      // this.router.navigateByUrl("/login", { skipLocationChange: true })

      return this.router.parseUrl("/login");
    }
    return value
  }
}