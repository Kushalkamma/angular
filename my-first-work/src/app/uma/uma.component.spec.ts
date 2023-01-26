import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmaComponent } from './uma.component';

describe('UmaComponent', () => {
  let component: UmaComponent;
  let fixture: ComponentFixture<UmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
