import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichsuPage } from './lichsu.page';

describe('LichsuPage', () => {
  let component: LichsuPage;
  let fixture: ComponentFixture<LichsuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichsuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichsuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
