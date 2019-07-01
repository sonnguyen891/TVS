import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoicuocdangsudungPage } from './goicuocdangsudung.page';

describe('GoicuocdangsudungPage', () => {
  let component: GoicuocdangsudungPage;
  let fixture: ComponentFixture<GoicuocdangsudungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoicuocdangsudungPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoicuocdangsudungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
