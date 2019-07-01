import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tracuugoi',
  templateUrl: './tracuugoi.page.html',
  styleUrls: ['./tracuugoi.page.scss'],
})
export class TracuugoiPage implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
  }

openGoicuocdangsd()
{
  this.router.navigateByUrl("goicuocdangsudung");
}
openGoicuocdoanhthu()
{
  this.router.navigateByUrl("goicuocdoanhthu");
}
openGoicuoc()
  {
    this.router.navigateByUrl("goicuoc");
  }
  openHome()
  {
    this.router.navigateByUrl("trangchu1");
  }
}
