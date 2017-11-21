import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { Angular2TokenService } from 'angular2-token';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomComponent } from './room/room.component';
import { AuthService } from './services/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RoomsComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ Angular2TokenService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
