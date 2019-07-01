import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoicuocPage } from './goicuoc.page';

describe('GoicuocPage', () => {
  let component: GoicuocPage;
  let fixture: ComponentFixture<GoicuocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoicuocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoicuocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
