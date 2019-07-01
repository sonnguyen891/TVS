import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { GlobalService } from '../global.service';

import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs/Observable';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-taikhoan',
  templateUrl: './taikhoan.page.html',
  styleUrls: ['./taikhoan.page.scss'],
})
export class TaikhoanPage {

  constructor(public navCtrl: NavController,
    public toastController: ToastController,
    public formsModule: FormsModule,
    public router: Router,
    public loadingController: LoadingController,
    public share: GlobalService,
    private http: HttpClient) {

     }

  openTrangChu() {
    this.router.navigateByUrl("/trangchu1");
  }

  openKhoHang(){
    this.router.navigateByUrl("/khohang");
  }

  openTaiKhoan() {
    this.router.navigateByUrl("taikhoan");
  }

  openDiemBanHang() {
    this.router.navigateByUrl("/diembanhang");
  }

  openLichSu(){
    this.router.navigateByUrl("/lichsu");
  }

  logOut(){
    this.router.navigateByUrl("/login");
  }

  changepass()
  {
    this.router.navigateByUrl("/changepass");
  }
  openHome()
  {
    this.router.navigateByUrl("trangchu1");
  }
}
