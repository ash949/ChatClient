import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  room = {};
  constructor(private router:ActivatedRoute, private http:HttpClient) {
    this.http.get(environment.token_auth_config.apiBase + 'rooms/' + this.router.snapshot.params.id).subscribe(
      (res) => {
        this.room = JSON.parse(JSON.stringify(res));
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
