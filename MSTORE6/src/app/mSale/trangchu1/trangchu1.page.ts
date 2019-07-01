import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { GlobalService } from '../../global.service';

import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs/Observable';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trangchu1',
  templateUrl: './trangchu1.page.html',
  styleUrls: ['./trangchu1.page.scss'],
})
export class Trangchu1Page {

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

    openLichSu(){
      this.router.navigateByUrl("/lichsu");
    }
    
    openDiemBanHang() {
      this.router.navigateByUrl("/diembanhang");
    }
    openTracuugoi()
    {
      this.router.navigateByUrl("/tracuugoi");
    }
    openBangoitt()
    {
      this.router.navigateByUrl("/bangoitructiep");
    }
    openHome()
  {
    this.router.navigateByUrl("login");
  }
  openTintuc()
  {
    this.router.navigateByUrl("tintuc");
  }
  openDoanhso()
  {
    this.router.navigateByUrl("baocaodoanhso");
  }
}
