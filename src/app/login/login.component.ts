import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string = '';
  password:string = '';
  constructor(private http:HttpClient, private a2tService:Angular2TokenService, private router: Router) {
    this.a2tService.init(environment.token_auth_config);
  }

  ngOnInit() {
  }

  onSubmit(){
    this.a2tService.signIn({email: this.email, password: this.password}).subscribe(
      (res) => {
        this.router.navigate(['/rooms']);
      },
      (err) => {
        alert(JSON.parse(err._body).errors[0]);
      }
    );
  }

}
