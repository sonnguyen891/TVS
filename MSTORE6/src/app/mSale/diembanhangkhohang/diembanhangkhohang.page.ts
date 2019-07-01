import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { GlobalService } from '../../global.service';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-diembanhangkhohang',
  templateUrl: './diembanhangkhohang.page.html',
  styleUrls: ['./diembanhangkhohang.page.scss'],
})
export class DiembanhangkhohangPage {

  public posCareId: string;

  constructor(public navCtrl: NavController,
    public toastController: ToastController,
    public formsModule: FormsModule,
    public router: Router,
    public activateRoute: ActivatedRoute,
    public loadingController: LoadingController,
    public share: GlobalService,
    private http: HttpClient) {

    this.posCareId = this.activateRoute.snapshot.paramMap.get('id');

  }

  diemBanHangChiTiet(param) {
    this.router.navigate(['diembanhangchitiet', param]);
  }

  openTrangChu() {
    this.router.navigateByUrl("/trangchu1");
  }

  openKhoHang(){
    this.router.navigateByUrl("/khohang");
  }

  openLichSu(){
    this.router.navigateByUrl("/lichsu");
  }
  
  openTaiKhoan() {
    this.router.navigateByUrl("taikhoan");
  }

}
