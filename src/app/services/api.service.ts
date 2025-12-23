import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  public getPrimeFactorsService(n: number): Observable<number[]> {
    return of(n).pipe(
      delay(500),
      map(this.getPrimeFactors)
    );
  }

  private getPrimeFactors(n: number): number[] {
    const factors: number[] = [];
    let divisor = 2;

    while (n >= 2) {
      if (n % divisor === 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }
}
