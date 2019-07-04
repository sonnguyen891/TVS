import { Injectable } from '@angular/core';
import { Http, Headers, RequestMethod, RequestOptions} from '@angular/http';
import { map } from "rxjs/operators";
import { pipe } from '@angular/core/src/render3';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';
const tokenlogin = "";
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: Http) { }

  // getData() {

  //   var _url = 'https://msale.mobifone.vn:8443/mSales-Login/LoginManagerRS/login?loginStr=QzZfRjE3NTExOjYzMDYzNg==';
  //       var _body = {"storeId":"","userId":"","passWord":"","fullName":"","appFunction":""};
  //       var _header = new Headers({'Content-Type':'Application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'POST, GET, OPTIONS, DELETE'});
  //       var _option  = new RequestOptions({method:RequestMethod.Post,headers:_header});
  //       return this.http.get(_url,_option).pipe(map(res => res.json()));
  // }

  
}
