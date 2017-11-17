import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Angular2TokenService } from 'angular2-token';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  constructor(private http:HttpClient, private authTokenService:Angular2TokenService){
    this.authTokenService.init(environment.token_auth_config);
    this.authTokenService.signIn({email: 'test1@test1.com', password: '12341234'}).subscribe( 
      (res) => {
        alert('response body: ' + JSON.stringify(res.json()) );
        alert('token: ' + res.headers.toJSON()['access-token'][0]);
      },
      (err) => {
        alert(err);
      }
    );
  }
}
