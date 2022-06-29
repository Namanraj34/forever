import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExlusiveComponent } from './exlusive.component';

describe('ExlusiveComponent', () => {
  let component: ExlusiveComponent;
  let fixture: ComponentFixture<ExlusiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExlusiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExlusiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
