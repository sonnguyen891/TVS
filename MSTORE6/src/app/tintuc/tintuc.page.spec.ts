import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TintucPage } from './tintuc.page';

describe('TintucPage', () => {
  let component: TintucPage;
  let fixture: ComponentFixture<TintucPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TintucPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TintucPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
