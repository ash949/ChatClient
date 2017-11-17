import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Angular2TokenService } from 'angular2-token';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chat Application';
  constructor(private http:HttpClient, private a2tService:Angular2TokenService){
    this.a2tService.init(environment.token_auth_config);
  }
}
