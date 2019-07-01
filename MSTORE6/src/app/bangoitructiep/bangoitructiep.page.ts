import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SMS } from '@ionic-native/sms/ngx';
@Component({
  selector: 'app-bangoitructiep',
  templateUrl: './bangoitructiep.page.html',
  styleUrls: ['./bangoitructiep.page.scss'],
})
export class BangoitructiepPage implements OnInit {

  constructor(public router: Router, private sms: SMS) { }

  ngOnInit() {
  }
  openHome()
  {
    this.router.navigateByUrl("trangchu1");
  }
  getSMS()
  {
    this.sms.send('09458597999', 'hello');
  }
}
