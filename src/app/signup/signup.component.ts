import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  nickname:string;
  email:string;
  password:string

  constructor(private a2tService:Angular2TokenService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    if (this.a2tService.userSignedIn){
      this.router.navigate(['/rooms']);
    }
  }

  onSubmit(){
    this.a2tService.registerAccount({
      email: this.email,
      password: this.password,
      passwordConfirmation: this.password,
      nickname: this.nickname
    }).subscribe(
      (res) => {
        this.router.navigate(['/login']);
      },
      (err) => {
        this.router.navigate(['/signup']);
      }
    );
  }

}
