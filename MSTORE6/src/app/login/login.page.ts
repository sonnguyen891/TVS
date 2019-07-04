import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { GlobalService } from '../global.service';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestMethod, RequestOptions} from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
const apiUrl = "https://congty6.mobifone.vn";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public userName: string;
  public passWord: string;
  public userSave:string='';
  public passSave:string='';
  public userSessionId: string;
  public remember:boolean;
  data: Observable<any>;
  constructor(public navCtrl: NavController,
    public toastController: ToastController,
    public formsModule: FormsModule,
    public router: Router,
    public loadingController: LoadingController,
    public share: GlobalService,
    private storage:Storage,
    private http:Http, private http1: HttpClient) {

    this.userName = "";
    this.passWord ="";

    // this.http.get('https://msale.mobifone.vn:8443/mSales-Login/LoginManagerRS/login?loginStr=QzZfRjE3NTExOjYzMDYzNg==')
    //   .subscribe(data => {
    //     userSessionId = data["LoginOutput"]["userSessionId"];
    //   })

     // Or to get a key/value pair
     this.storage.get(this.userSave).then((val) => {
    //   //console.log('Your age is', val);
      this.userName = val;
      });

     this.storage.get(this.passSave).then((val) => {
      //console.log('Your age is', val);
       this.passWord = val;
     });

  }
registration()
{
  this.router.navigateByUrl("dangky");
}
forgetpass()
{
  this.router.navigateByUrl("quenmatkhau");
}
watting()
{
  this.router.navigateByUrl("waitting");
}
  signin() 
  {
  var _header = new Headers({
    'Content-Type':'Application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST, GET, OPTIONS, DELETE'
  });
  const requestOptions = new RequestOptions({ headers: _header });

  let postData = {
          "name": this.userName,
          "password": this.passWord
  }

  this.http.post(apiUrl + "/login", postData, requestOptions)
    .subscribe(data => {
      //console.log(data['_body']);
      this.userSessionId = data['_body'];
      this.searchpackage();
        if(this.remember)
        {
          //console.log('abc');
          this.storage.set(this.userSave,this.userName);     
          this.storage.set(this.passSave,this.passWord); 
        }
        this.router.navigate(['waitting']);
     }, error => {
      console.log(error);
    });
  }

  searchpackage()
{
  //  var dataObj = {
  //   "COMMAND":"GET_PCK_SUB_INFO",
  //   "isdn":"" + this.phoneNumber
  // }
  //   this.http.get("https://congty6.mobifone.vn/rest/care/bangoi?json="+encodeURIComponent(JSON.stringify(dataObj)))
  //    .subscribe(data => {
  //      console.log(data['_body']);
  //   })

  var _header = new Headers({
    'Content-Type':'Application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST, GET, OPTIONS, DELETE',
    "Authorization": this.userSessionId
  });
  const requestOptions = new RequestOptions({ headers: _header });

  let postData = '{"COMMAND":"GET_PCK_SUB_INFO","isdn":"903457979"}';
  this.http.get("https://congty6.mobifone.vn/rest/care/bangoi?json="+encodeURIComponent(JSON.stringify(postData)), requestOptions)
    .subscribe(data => {
      //console.log(data['_body']);
      console.log(data['_body']);
      
     }, error => {
      console.log(error);
    });

}



}
