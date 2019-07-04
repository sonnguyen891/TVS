import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-waitting',
  templateUrl: './waitting.page.html',
  styleUrls: ['./waitting.page.scss'],
})
export class WaittingPage {

  constructor(public router: Router) { 
  
    this.gotohome();
  }

gotohome()
{
  
  this.router.navigateByUrl("trangchu1");
}
}
