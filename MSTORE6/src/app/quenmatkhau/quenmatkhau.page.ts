import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quenmatkhau',
  templateUrl: './quenmatkhau.page.html',
  styleUrls: ['./quenmatkhau.page.scss'],
})
export class QuenmatkhauPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  getpass()
  {
    console.log("Một tin nhắn chứa mật khẩu sẽ được gửi về số điện thoại người dùng");
  }

  
  backlogin()
{
  this.router.navigateByUrl("login");
}
}
