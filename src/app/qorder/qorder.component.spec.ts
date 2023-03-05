import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QorderComponent } from './qorder.component';

describe('QorderComponent', () => {
  let component: QorderComponent;
  let fixture: ComponentFixture<QorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
