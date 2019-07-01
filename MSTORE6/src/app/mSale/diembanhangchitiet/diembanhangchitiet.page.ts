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
  selector: 'app-diembanhang',
  templateUrl: './diembanhangchitiet.page.html',
  styleUrls: ['./diembanhangchitiet.page.scss'],
})

export class DiembanhangchitietPage {

  public danhSachDiemBan: any;

  public posCareCode: string;
  public posCarePhone: string;
  public posCareLat: string;
  public posCareLong: string;
  public posCareName: string;
  public posCareId: string;
  public posCareAddress: string;
  public numTheTon: string;
  public posCareAvatar: string;
  public numSimTon: string;
  public posCareStatus: string;

  constructor(public navCtrl: NavController,
    public toastController: ToastController,
    public formsModule: FormsModule,
    public router: Router,
    public activateRoute: ActivatedRoute,
    public loadingController: LoadingController,
    public share: GlobalService,
    private http: HttpClient) {

    this.posCareId = this.activateRoute.snapshot.paramMap.get('id');
    var tmpdanhSachDiemBan = localStorage.getItem("DanhSachDiemBan");
    this.danhSachDiemBan = JSON.parse(tmpdanhSachDiemBan);

    if (this.danhSachDiemBan != null) {

      for (var i = 0; i < this.danhSachDiemBan.length; i++) {
        if (this.danhSachDiemBan[i].posCareId == this.posCareId) {
          this.posCarePhone = this.danhSachDiemBan[i].posCarePhone;
          this.posCareLat = this.danhSachDiemBan[i].posCareLat;
          this.posCareLong = this.danhSachDiemBan[i].posCareLong;
          this.posCareName = this.danhSachDiemBan[i].posCareName;
          this.posCareCode = this.danhSachDiemBan[i].posCareCode;
          this.posCareAddress = this.danhSachDiemBan[i].posCareAddress;
          this.numTheTon = this.danhSachDiemBan[i].numTheTon;
          this.posCareAvatar = this.danhSachDiemBan[i].posCareAvatar;
          this.numSimTon = this.danhSachDiemBan[i].numSimTon;
          this.posCareStatus = this.danhSachDiemBan[i].posCareStatus;
          break;
        }
      }

    }

  }

  openTrangChu() {
    this.router.navigateByUrl("/trangchu1");
  }

  openKhoHang(){
    this.router.navigateByUrl("/khohang");
  }
  
  diemBanHang() {
    this.router.navigateByUrl("/diembanhang");
  }

  banHang(param) {
    this.router.navigate(['diembanhangbanhang', param]);
  }

  khoHang(param) {
    this.router.navigate(['diembanhangkhohang', param]);
  }

  openLichSu(){
    this.router.navigateByUrl("/lichsu");
  }
  
  openTaiKhoan() {
    this.router.navigateByUrl("taikhoan");
  }

}
