import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Angular2TokenService } from 'angular2-token';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chat Application';
  constructor(private authService:AuthService, private a2tService:Angular2TokenService){
  }
}
