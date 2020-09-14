import { Component } from '@angular/core';
import { Router } from '@angular/router'




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  title:string ="Home Page" ;

 
data ;

  constructor(public router: Router) {

  this.data =  this.router.getCurrentNavigation().extras.state;

  console.log(this.data)

  }

  navResult(){

  this.router.navigateByUrl('/table');
  }

  

}
