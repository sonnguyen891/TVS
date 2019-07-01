import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-waitting',
  templateUrl: './waitting.page.html',
  styleUrls: ['./waitting.page.scss'],
})
export class WaittingPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
gotohome()
{
  this.router.navigateByUrl("trangchu1");
}
}
