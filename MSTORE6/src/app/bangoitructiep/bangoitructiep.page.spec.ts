import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BangoitructiepPage } from './bangoitructiep.page';

describe('BangoitructiepPage', () => {
  let component: BangoitructiepPage;
  let fixture: ComponentFixture<BangoitructiepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangoitructiepPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BangoitructiepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
