import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bcdoanhso1',
  templateUrl: './bcdoanhso1.page.html',
  styleUrls: ['./bcdoanhso1.page.scss'],
})
export class Bcdoanhso1Page implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  openHome()
  {
    this.router.navigateByUrl("baocaodoanhso");
  }
  getData()
  {
    
  }
}
