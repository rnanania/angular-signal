import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalApis } from './signal-apis';

describe('SignalApis', () => {
  let component: SignalApis;
  let fixture: ComponentFixture<SignalApis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalApis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalApis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
