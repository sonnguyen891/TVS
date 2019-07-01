import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-goicuocdangsudung',
  templateUrl: './goicuocdangsudung.page.html',
  styleUrls: ['./goicuocdangsudung.page.scss'],
})
export class GoicuocdangsudungPage implements OnInit {

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
