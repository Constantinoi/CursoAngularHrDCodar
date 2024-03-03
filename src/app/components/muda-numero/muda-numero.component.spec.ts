import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MudaNumeroComponent } from './muda-numero.component';

describe('MudaNumeroComponent', () => {
  let component: MudaNumeroComponent;
  let fixture: ComponentFixture<MudaNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MudaNumeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MudaNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
