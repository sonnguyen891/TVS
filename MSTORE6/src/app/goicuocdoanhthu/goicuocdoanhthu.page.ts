import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-goicuocdoanhthu',
  templateUrl: './goicuocdoanhthu.page.html',
  styleUrls: ['./goicuocdoanhthu.page.scss'],
})
export class GoicuocdoanhthuPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  openGoicuocdangsd()
  {
    this.router.navigateByUrl("goicuocdangsudung");
  }
  openGoicuoc()
  {
    this.router.navigateByUrl("goicuoc");
  }
  openGoicuocdoanhthu()
{
  this.router.navigateByUrl("goicuocdoanhthu");
}
openHome()
  {
    this.router.navigateByUrl("trangchu1");
  }
}
