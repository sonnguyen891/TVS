import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhohangPage } from './khohang.page';

describe('KhohangPage', () => {
  let component: KhohangPage;
  let fixture: ComponentFixture<KhohangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhohangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhohangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
