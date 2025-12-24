import { CurrencyPipe } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';

const RATES: Record<string, number> = {
  'USD': 1,
  'EUR': 0.9,
  'GBP': 0.8,
  'JPY': 110,
  'CNY': 7
};

@Component({
  selector: 'currency-converter',
  imports: [CurrencyPipe],
  templateUrl: './currency-converter.html'
})
export class CurrencyConverter {
  readonly amount = input.required<number>();
  readonly currency = input.required<string>();
  readonly converted = computed(() => this.amount() * RATES[this.currency()]);
  readonly callbackFn = output<string>();

  triggerCallback() {
    this.callbackFn.emit(Date.now().toString());
  }
}
