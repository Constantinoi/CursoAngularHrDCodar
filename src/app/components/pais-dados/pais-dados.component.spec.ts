/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaisDadosComponent } from './pais-dados.component';

describe('PaisDadosComponent', () => {
  let component: PaisDadosComponent;
  let fixture: ComponentFixture<PaisDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
