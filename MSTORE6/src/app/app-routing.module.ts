import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'diembanhang', loadChildren: './mSale/diembanhang/diembanhang.module#DiembanhangPageModule' },
  { path: 'diembanhangchitiet/:id', loadChildren: './mSale/diembanhangchitiet/diembanhangchitiet.module#DiembanhangchitietPageModule' },
  { path: 'trangchu1', loadChildren: './mSale/trangchu1/trangchu1.module#Trangchu1PageModule' },
  { path: 'diembanhangbanhang/:id', loadChildren: './mSale/diembanhangbanhang/diembanhangbanhang.module#DiembanhangbanhangPageModule' },
  { path: 'diembanhangkhohang/:id', loadChildren: './mSale/diembanhangkhohang/diembanhangkhohang.module#DiembanhangkhohangPageModule' },
  { path: 'khohang', loadChildren: './mStore/khohang/khohang.module#KhohangPageModule' },
  { path: 'taikhoan', loadChildren: './taikhoan/taikhoan.module#TaikhoanPageModule' },
  { path: 'lichsu', loadChildren: './lichsu/lichsu.module#LichsuPageModule' },
  { path: 'dangky', loadChildren: './dangky/dangky.module#DangkyPageModule' },
  { path: 'quenmatkhau', loadChildren: './quenmatkhau/quenmatkhau.module#QuenmatkhauPageModule' },
  { path: 'changepass', loadChildren: './changepass/changepass.module#ChangepassPageModule' },
  { path: 'waitting', loadChildren: './waitting/waitting.module#WaittingPageModule' },
  { path: 'tracuugoi', loadChildren: './tracuugoi/tracuugoi.module#TracuugoiPageModule' },
  { path: 'goicuoc', loadChildren: './goicuoc/goicuoc.module#GoicuocPageModule' },
  { path: 'goicuocdangsudung', loadChildren: './goicuocdangsudung/goicuocdangsudung.module#GoicuocdangsudungPageModule' },
  { path: 'goicuocdoanhthu', loadChildren: './goicuocdoanhthu/goicuocdoanhthu.module#GoicuocdoanhthuPageModule' },
  { path: 'bangoitructiep', loadChildren: './bangoitructiep/bangoitructiep.module#BangoitructiepPageModule' },
  { path: 'tintuc', loadChildren: './tintuc/tintuc.module#TintucPageModule' },
  { path: 'baocaodoanhso', loadChildren: './baocaodoanhso/baocaodoanhso.module#BaocaodoanhsoPageModule' },
  { path: 'bcdoanhso1', loadChildren: './bcdoanhso1/bcdoanhso1.module#Bcdoanhso1PageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
