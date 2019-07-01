import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiembanhangbanhangPage } from './diembanhangbanhang.page';

describe('DiembanhangbanhangPage', () => {
  let component: DiembanhangbanhangPage;
  let fixture: ComponentFixture<DiembanhangbanhangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiembanhangbanhangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiembanhangbanhangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
