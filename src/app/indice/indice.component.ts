import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit {

  month3: Object;
  month6: Object;
  year1: Object;
  year2: Object;
  year3: Object;
  data: Object;
  isloading = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:8000/api/contact/indiceCrm/3month')
        .subscribe(data => {
              this.month3 = data;
              this.isloading = true;

            },
            error => {
              console.log(error);
            }
        );
    this.http.get('http://localhost:8000/api/contact/indiceCrm/6month')
        .subscribe(data => {
              this.month6 = data;
              this.isloading = true;

            },
            error => {
              console.log(error);
            }
        );
    this.http.get('http://localhost:8000/api/contact/indiceCrm/1year')
        .subscribe(data => {
              this.year1 = data;
              this.isloading = true;

            },
            error => {
              console.log(error);
            }
        );
    this.http.get('http://localhost:8000/api/contact/indiceCrm/2year')
        .subscribe(data => {
              this.year2 = data;
              this.isloading = true;

            },
            error => {
              console.log(error);
            }
        );
    this.http.get('http://localhost:8000/api/contact/indiceCrm/3year')
        .subscribe(data => {
              this.year3 = data;
              this.isloading = true;

            },
            error => {
              console.log(error);
            }
        );

  }

}
