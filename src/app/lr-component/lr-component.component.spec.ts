import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LrComponentComponent } from './lr-component.component';

describe('LrComponentComponent', () => {
  let component: LrComponentComponent;
  let fixture: ComponentFixture<LrComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LrComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LrComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
