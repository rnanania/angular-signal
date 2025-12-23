import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsBasics } from './signals-basics';

describe('SignalsBasics', () => {
  let component: SignalsBasics;
  let fixture: ComponentFixture<SignalsBasics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsBasics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsBasics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
