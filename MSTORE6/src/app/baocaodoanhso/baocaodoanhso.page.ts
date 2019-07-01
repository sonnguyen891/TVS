import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-baocaodoanhso',
  templateUrl: './baocaodoanhso.page.html',
  styleUrls: ['./baocaodoanhso.page.scss'],
})
export class BaocaodoanhsoPage implements OnInit {
  tuNgay:string;
  denNgay:string;
  constructor(public router: Router) { }

  ngOnInit() {
  }
  openHome()
  {
    this.router.navigateByUrl("trangchu1");
  }
  openDoanhSo() {
    this.router.navigate(['bcdoanhso1']);
  }
}
