import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { environment } from '../../environments/environment';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate{
  
  constructor(private router:Router, private a2tService:Angular2TokenService) {
    this.a2tService.init(environment.token_auth_config);
  }
  
  canActivate() {
    if( this.a2tService.userSignedIn() ){  
      return true
    }else{
      this.router.navigate(['/login']);
      return false
    }
  }
}