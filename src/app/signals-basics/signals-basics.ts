import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-basics',
  imports: [],
  templateUrl: './signals-basics.html'
})
export class SignalsBasics {
  protected readonly num1 = signal(0);
  protected readonly num2 = signal(0);
  protected readonly isBig = signal(false);


  protected readonly sum = computed(() => this.num1() + this.num2());

  protected readonly incrementNum1 = () => {
    this.num1.update((num) => num + 1);
  };

  protected readonly resetNum1 = () => {
    this.num1.set(0);
    this.num2.set(0);
  };

  constructor() {
    effect(() => {
      console.info("sum: ", this.sum());
      // Use computed instead of signal for this
      this.isBig.set(this.sum() > 10);
    }, {
      // Avoid doing this, this is just the demo puspose.
      allowSignalWrites: true
    })
  }
}
