import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  Navigate() {

    this.router.navigateByUrl('/questions');
  }

  Access() {

    this.router.navigateByUrl('/home');
  }

}
