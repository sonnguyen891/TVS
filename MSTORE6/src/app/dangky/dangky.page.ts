import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.page.html',
  styleUrls: ['./dangky.page.scss'],
})
export class DangkyPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  openLogin() {
    this.router.navigateByUrl("/login");
  }

}
