import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustregisterComponent } from './custregister.component';

describe('CustregisterComponent', () => {
  let component: CustregisterComponent;
  let fixture: ComponentFixture<CustregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
