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
import _ from 'lodash';

@Component({
  selector: 'app-khohang',
  templateUrl: './khohang.page.html',
  styleUrls: ['./khohang.page.scss'],
})
export class KhohangPage {

  public danhSachHangHoa: any;
  public danhSachHangHoaAll: any;

  constructor(public navCtrl: NavController,
    public toastController: ToastController,
    public formsModule: FormsModule,
    public router: Router,
    public loadingController: LoadingController,
    public share: GlobalService,
    private http: HttpClient) {

      var tmpdanhSachHangHoa = localStorage.getItem("DanhSachHangHoa");
    this.danhSachHangHoa = JSON.parse(tmpdanhSachHangHoa);

    if (this.danhSachHangHoa == null) {
      this.http.get('http://msale-web.mobifone.vn/mstore6/rest/salews/findProductStock?memberId=2007353')
        .subscribe(data => {
          this.danhSachHangHoa = data["javaResponse"];
          localStorage.setItem("DanhSachHangHoa", JSON.stringify(this.danhSachHangHoa));
        })
    }

    this.danhSachHangHoaAll = this.danhSachHangHoa;

  }

  filterHangHoa(id: any) {
    let val = id.target.value;
    if (val && val.trim() != '') {
      this.danhSachHangHoa = _.values(this.danhSachHangHoaAll);
      this.danhSachHangHoa = this.danhSachHangHoa.filter((hangHoa) => {
        return (hangHoa.product_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else {
      this.danhSachHangHoa = this.danhSachHangHoaAll;
    }
  }
  
  openTrangChu() {
    this.router.navigateByUrl("/trangchu1");
  }

  openKhoHang() {
    this.router.navigateByUrl("/khohang");
  }

  openLichSu(){
    this.router.navigateByUrl("/lichsu");
  }
  
  openTaiKhoan() {
    this.router.navigateByUrl("taikhoan");
  }

  openDiemBanHang() {
    this.router.navigateByUrl("/diembanhang");
  }

}
