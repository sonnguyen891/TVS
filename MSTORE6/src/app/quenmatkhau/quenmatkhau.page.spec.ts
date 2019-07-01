import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuenmatkhauPage } from './quenmatkhau.page';

describe('QuenmatkhauPage', () => {
  let component: QuenmatkhauPage;
  let fixture: ComponentFixture<QuenmatkhauPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuenmatkhauPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuenmatkhauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
