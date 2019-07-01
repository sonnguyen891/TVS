import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaikhoanPage } from './taikhoan.page';

describe('TaikhoanPage', () => {
  let component: TaikhoanPage;
  let fixture: ComponentFixture<TaikhoanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaikhoanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaikhoanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
