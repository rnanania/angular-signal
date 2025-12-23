import { Component, inject, signal, WritableSignal } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-interop-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './interop-rxjs.html'
})
export class InteropRxjs {
  protected readonly number = signal(0);
  readonly number$ = toObservable(this.number);
  readonly apiService = inject(ApiService);

  readonly results$ = this.number$.pipe(
    switchMap((n) => this.apiService.getPrimeFactorsService(n))
  );

  protected readonly primeFactors = toSignal(this.results$);

  increaseNumber() {
    this.number.update((n) => n + 1);
  }

  decreaseNumber() {
    this.number.update((n) => n - 1);
  }
}
