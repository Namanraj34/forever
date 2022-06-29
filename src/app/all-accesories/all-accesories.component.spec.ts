import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAccesoriesComponent } from './all-accesories.component';

describe('AllAccesoriesComponent', () => {
  let component: AllAccesoriesComponent;
  let fixture: ComponentFixture<AllAccesoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAccesoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAccesoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
