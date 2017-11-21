import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute} from "@angular/router";
import { Angular2TokenService } from 'angular2-token';
import { AuthService } from '../services/auth.service'
var ActionCable = require('actioncable');


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  room = {
    id: -1,
    name: '',
    users: [],
    messages: []
  };
  messageBody:string;
  currentUserID:string;
  userSubscription;
  constructor(private a2tService:Angular2TokenService,
              private authService: AuthService,
              private router:Router,
              private activeRouter:ActivatedRoute,
              private http:HttpClient) {
    
  }

  sendMessage(){
    this.userSubscription.sendMessage();
  }

  ngOnInit() {
    this.a2tService.validateToken().subscribe(
      (authRes) => {
        this.http.get(environment.token_auth_config.apiBase + 'rooms/' + this.activeRouter.snapshot.params.id).subscribe(
          (res2) => {
            this.room = JSON.parse(JSON.stringify(res2));
            this.currentUserID = this.a2tService.currentUserData.id.toString();
            var authData = this.a2tService.currentAuthData;
            console.log(authData);
            var identifiers = '?' + 'access-token=' + authData['accessToken'] + '&client=' + authData['client'] + '&uid=' + authData['uid'];
            console.log(identifiers);
            let consumer = ActionCable.createConsumer('ws://'+ environment.token_auth_config.apiBaseNameOnly + '/cable' + identifiers );
            this.userSubscription = consumer.subscriptions.create('RoomChannel',
            {
              connected: () => {
                this.userSubscription.listenToRoom();
              },
              disconnected: () => {
                
              },
              received: (data) => {
                console.log(data)
                var messageJSON = JSON.parse(JSON.stringify(data.message));
                var messageArray = [messageJSON.user_id, messageJSON.nickname, messageJSON.body];
                this.room.messages.unshift(messageArray);
              },
              listenToRoom: () => {
                this.userSubscription.perform('listen', {
                  room_id: this.room.id
                });
              },
              sendMessage: () => {
                this.userSubscription.perform('broadcast_message', {
                  message_body: this.messageBody,
                  current_user_id: this.currentUserID,
                  room_id: this.room.id
                });
              }
            });
          }
        );
      },
      (authErr) => {
        this.router.navigate(['/login']);
      }
    );
  }
}
