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

import _ from 'lodash';

@Component({
  selector: 'app-diembanhang',
  templateUrl: './diembanhang.page.html',
  styleUrls: ['./diembanhang.page.scss'],
})
export class DiembanhangPage {

  public danhSachDiemBan: any;
  public danhSachDiemBanAll: any;

  public queryText: string;

  constructor(public navCtrl: NavController,
    public toastController: ToastController,
    public formsModule: FormsModule,
    public router: Router,
    public loadingController: LoadingController,
    public share: GlobalService,
    private http: HttpClient) {

    var tmpdanhSachDiemBan = localStorage.getItem("DanhSachDiemBan");
    this.danhSachDiemBan = JSON.parse(tmpdanhSachDiemBan);

    if (this.danhSachDiemBan == null) {
      this.http.get('http://msale-web.mobifone.vn/mstore6/rest/salews/searchPosOfStaff?staffId=2011468')
        .subscribe(data => {
          this.danhSachDiemBan = data["javaResponse"];
          localStorage.setItem("DanhSachDiemBan", JSON.stringify(this.danhSachDiemBan));
        })
    }

    this.danhSachDiemBanAll = this.danhSachDiemBan;
  }

  filterDiemBanHang(id: any) {
    let val = id.target.value;
    if (val && val.trim() != '') {
      this.danhSachDiemBan = _.values(this.danhSachDiemBanAll);
      this.danhSachDiemBan = this.danhSachDiemBan.filter((diemBanHang) => {
        return (diemBanHang.posCareName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else {
      this.danhSachDiemBan = this.danhSachDiemBanAll;
    }
  }

  openTrangChu() {
    this.router.navigateByUrl("/trangchu1");
  }
  
  openKhoHang(){
    this.router.navigateByUrl("/khohang");
  }
  
  openDiemBanHang(abc) {
    this.router.navigate(['diembanhangchitiet', abc]);
  }

  openLichSu(){
    this.router.navigateByUrl("/lichsu");
  }
  
  openTaiKhoan() {
    this.router.navigateByUrl("taikhoan");
  }

}
