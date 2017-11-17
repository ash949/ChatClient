import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  rooms = [];
  constructor(private router:Router, private route:ActivatedRoute, private http:HttpClient) {
    this.http.get(environment.token_auth_config.apiBase + 'rooms', {}).subscribe(
      (res) => {
        this.rooms = Object.keys(res).map(function(k) { return res[k] });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
