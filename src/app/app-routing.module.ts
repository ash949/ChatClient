import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomComponent } from './room/room.component';
import { AuthService } from './services/auth.service'

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    canActivate: [AuthService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent,
    canActivate: [AuthService]
  },
  {
    path : 'room/:id',
    component: RoomComponent,
    canActivate: [AuthService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
