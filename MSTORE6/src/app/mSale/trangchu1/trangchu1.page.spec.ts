import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trangchu1Page } from './trangchu1.page';

describe('Trangchu1Page', () => {
  let component: Trangchu1Page;
  let fixture: ComponentFixture<Trangchu1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trangchu1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trangchu1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
