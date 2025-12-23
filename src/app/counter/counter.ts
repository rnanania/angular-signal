// import { Component, signal, inject, DestroyRef } from '@angular/core';

// @Component({
//   selector: 'app-counter',
//   imports: [],
//   templateUrl: './counter.html'
// })
// export class Counter {
//   protected readonly count = signal(0);

//   constructor() {
//     const interval = setInterval(() => {
//       this.count.update((value) => value + 1);
//       console.log('Counter: ', this.count());
//     }, 500);

//     inject(DestroyRef).onDestroy(() => clearInterval(interval));
//   }
// }


// ======== Similar to above but using rxjs ========
import { Component, effect, EffectRef, inject, Injector, runInInjectionContext, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { startEvenCounter } from './utils';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html'
})
export class Counter {
  protected readonly count = signal(0);
  private injector = inject(Injector);
  private effectRef: EffectRef | null = null;

  constructor() {
    interval(500)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.count.update((value) => value + 1);
      });
  }

  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      startEvenCounter();
    })
  }


  startCounting() {
    if (!this.effectRef) {
      this.effectRef = effect(() => {
        console.log('Counter: ', this.count());
      }, {
        injector: this.injector,
      });
    }
  }

  stopCounting() {
    if (this.effectRef) {
      this.effectRef.destroy();
      this.effectRef = null;
    }
  }
}

