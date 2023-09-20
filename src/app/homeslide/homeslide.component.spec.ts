import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeslideComponent } from './homeslide.component';

describe('HomeslideComponent', () => {
  let component: HomeslideComponent;
  let fixture: ComponentFixture<HomeslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeslideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
