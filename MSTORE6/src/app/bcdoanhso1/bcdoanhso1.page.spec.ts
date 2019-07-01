import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bcdoanhso1Page } from './bcdoanhso1.page';

describe('Bcdoanhso1Page', () => {
  let component: Bcdoanhso1Page;
  let fixture: ComponentFixture<Bcdoanhso1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bcdoanhso1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bcdoanhso1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
