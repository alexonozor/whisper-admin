import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var Materialize: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initailizerJquery();
  }

  initailizerJquery() {
    jQuery(document).ready(function () {
      jQuery('.button-collapse').sideNav();
      jQuery('.collapsible').collapsible();
    });
  }

}
