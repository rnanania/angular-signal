import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectContext } from './inject-context';

describe('InjectContext', () => {
  let component: InjectContext;
  let fixture: ComponentFixture<InjectContext>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectContext]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectContext);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
