import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteropRxjs } from './interop-rxjs';

describe('InteropRxjs', () => {
  let component: InteropRxjs;
  let fixture: ComponentFixture<InteropRxjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteropRxjs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteropRxjs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
