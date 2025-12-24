import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CurrencyConverter } from '../currency-converter/currency-converter';

const RATES: Record<string, number> = {
  'USD': 1,
  'EUR': 0.9,
  'GBP': 0.8,
  'JPY': 110,
  'CNY': 7
};

@Component({
  selector: 'app-signal-apis',
  imports: [CurrencyConverter, ReactiveFormsModule],
  templateUrl: './signal-apis.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalApis {
  readonly amountControl = new FormControl(0, { nonNullable: true });
  readonly currencyControl = new FormControl('USD', { nonNullable: true });
  readonly currencies = Object.keys(RATES);

  callbackFn(message: string) {
    console.info('Message received', message);
  }
}
