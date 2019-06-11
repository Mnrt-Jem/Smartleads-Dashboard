import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  today= new Date();
  jstoday = '';
  constructor() {
    this.jstoday = formatDate(this.today, 'EEEE dd MMMM yyyy', 'en-US', '+0530');
  }

  ngOnInit() {

  }



}
