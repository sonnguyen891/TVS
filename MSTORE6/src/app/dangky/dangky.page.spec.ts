import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangkyPage } from './dangky.page';

describe('DangkyPage', () => {
  let component: DangkyPage;
  let fixture: ComponentFixture<DangkyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangkyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangkyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
