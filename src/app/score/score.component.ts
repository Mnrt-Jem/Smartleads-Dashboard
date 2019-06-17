import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  Users: Object;
  data: Object;
  isloading = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8000/api/user/usersAll')
        .subscribe((data: any) => {
              this.Users = data.users;
              this.isloading = true;
              console.log(this.Users);
            },
            error => {
              console.log(error);
            }
        );
  }

}
