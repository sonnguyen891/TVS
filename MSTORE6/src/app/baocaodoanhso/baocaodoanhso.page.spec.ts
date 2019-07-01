import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaocaodoanhsoPage } from './baocaodoanhso.page';

describe('BaocaodoanhsoPage', () => {
  let component: BaocaodoanhsoPage;
  let fixture: ComponentFixture<BaocaodoanhsoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaocaodoanhsoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaocaodoanhsoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
