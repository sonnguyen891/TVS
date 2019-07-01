import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-goicuoc',
  templateUrl: './goicuoc.page.html',
  styleUrls: ['./goicuoc.page.scss'],
})
export class GoicuocPage implements OnInit {
 colorchung : string ="#fff";
 colorcombo : string ="#fff";
 colorfpt : string ="#fff";
 colordata : string ="#fff";
 colorgtgt : string ="#fff";
 colorckdai : string ="#fff";
 fontchung : string ="blue";
 fontcombo : string ="blue";
 fontfpt : string ="blue";
 fontdata : string ="blue";
 fontgtgt : string ="blue";
 fontckdai : string ="blue";
  constructor(public router: Router) { }

  ngOnInit() {
  }
  openGoicuocdangsd()
  {
    this.router.navigateByUrl("goicuocdangsudung");
  }
  openGoicuoc()
  {
    this.router.navigateByUrl("goicuoc");
  }
  openGoicuocdoanhthu()
{
  this.router.navigateByUrl("goicuocdoanhthu");
}
openHome()
  {
    this.router.navigateByUrl("trangchu1");
  }
openGoichung()
{
this.colorchung="#3880ff";
this.colorcombo="#fff";
this.colordata="#fff";
this.colorfpt="#fff";
this.colorgtgt="#fff";
this.colorckdai="#fff";
this.fontchung="#fff";
this.fontcombo="blue";
this.fontdata="blue";
this.fontgtgt="blue";
this.fontfpt="blue";
this.fontckdai="blue";
}
openCombo()
{
this.colorchung="#fff";
this.colorcombo="#3880ff";
this.colordata="#fff";
this.colorfpt="#fff";
this.colorgtgt="#fff";
this.colorckdai="#fff";
this.fontchung="blue";
this.fontcombo="#fff";
this.fontdata="blue";
this.fontgtgt="blue";
this.fontfpt="blue";
this.fontckdai="blue";
}
openFpt()
{
this.colorchung="#fff";
this.colorcombo="#fff";
this.colordata="#fff";
this.colorfpt="#3880ff";
this.colorgtgt="#fff";
this.colorckdai="#fff";
this.fontchung="blue";
this.fontcombo="blue";
this.fontdata="blue";
this.fontgtgt="blue";
this.fontfpt="#fff";
this.fontckdai="blue";
}
openData()
{
this.colorchung="#fff";
this.colorcombo="#fff";
this.colordata="#3880ff";
this.colorfpt="#fff";
this.colorgtgt="#fff";
this.colorckdai="#fff";
this.fontchung="blue";
this.fontcombo="blue";
this.fontdata="#fff";
this.fontgtgt="blue";
this.fontfpt="blue";
this.fontckdai="blue";
}
openCkdai()
{
this.colorchung="#fff";
this.colorcombo="#fff";
this.colordata="#fff";
this.colorfpt="#fff";
this.colorgtgt="#fff";
this.colorckdai="#3880ff";
this.fontchung="blue";
this.fontcombo="blue";
this.fontdata="blue";
this.fontgtgt="blue";
this.fontfpt="blue";
this.fontckdai="#fff";
}
openGtgt()
{
this.colorchung="#fff";
this.colorcombo="#fff";
this.colordata="#fff";
this.colorfpt="#fff";
this.colorgtgt="#3880ff";
this.colorckdai="#fff";
this.fontchung="blue";
this.fontcombo="blue";
this.fontdata="blue";
this.fontgtgt="#fff";
this.fontfpt="blue";
this.fontckdai="blue";
}
}
