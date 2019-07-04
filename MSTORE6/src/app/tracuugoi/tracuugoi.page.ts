import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestMethod, RequestOptions} from '@angular/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tracuugoi',
  templateUrl: './tracuugoi.page.html',
  styleUrls: ['./tracuugoi.page.scss'],
})
export class TracuugoiPage {
  public phoneNumber: string;
  constructor( public router: Router,private http:Http, private http1: HttpClient) { }


openGoicuocdangsd()
{
  this.router.navigateByUrl("goicuocdangsudung");
}
openGoicuocdoanhthu()
{
  this.router.navigateByUrl("goicuocdoanhthu");
}
openGoicuoc()
  {
    this.router.navigateByUrl("goicuoc");
  }
  openHome()
  {
    this.router.navigateByUrl("trangchu1");
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
    'Token':'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NjIxMjQ2NjEsInVzZXJuYW1lIjoiOTA0Njg2MzU3In0.2D3dt5j40PSDpjCUnSrpatuFd_AGUPUZWU'
  });
  const requestOptions = new RequestOptions({ headers: _header });

  let postData = {
    COMMAND:"GET_PCK_SUB_INFO",
     isdn: this.phoneNumber
  }
var a = encodeURIComponent(JSON.stringify(postData));
console.log("https://congty6.mobifone.vn/rest/care/bangoi?json="+a);
  this.http.get("https://congty6.mobifone.vn/rest/care/bangoi?json="+a, requestOptions)
    .subscribe(data => {
      //console.log(data['_body']);
      console.log(data['_body']);
      
     }, error => {
      console.log(error);
    });

}
}
