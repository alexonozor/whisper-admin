import { Component, OnInit } from '@angular/core';
declare var Materialize: any;
declare var jQuery: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.jqueryInit();
  }

  jqueryInit() {
    jQuery(".button-collapse").sideNav();
  }
}
