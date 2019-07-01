import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.page.html',
  styleUrls: ['./tintuc.page.scss'],
})
export class TintucPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  openHome()
  {
    this.router.navigateByUrl("trangchu1");
  }
}
