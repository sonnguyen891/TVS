import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiembanhangkhohangPage } from './diembanhangkhohang.page';

describe('DiembanhangkhohangPage', () => {
  let component: DiembanhangkhohangPage;
  let fixture: ComponentFixture<DiembanhangkhohangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiembanhangkhohangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiembanhangkhohangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
