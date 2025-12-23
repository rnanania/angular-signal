import { Component, signal } from '@angular/core';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-inject-context',
  imports: [Counter],
  templateUrl: './inject-context.html'
})
export class InjectContext {
  protected readonly showCounter = signal(false);
  toggleCounter() {
    this.showCounter.update((value) => !value);
  }
}
