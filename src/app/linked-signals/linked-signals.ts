import { Component, effect, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signals',
  imports: [],
  templateUrl: './linked-signals.html',
  styleUrl: './linked-signals.css'
})
export class LinkedSignals {
  readonly products = signal(['Product 1', 'Product 2', 'Product 3']);
  readonly selectedproduct = linkedSignal<string[], string>({
    source: this.products,
    computation: (products, current) => {
      if (!current) return products[products.length - 1];
      if (products.includes(current.value)) return current.value;
      return products[products.length - 1];
    }
  })


  addProduct() {
    this.products.update((products) => {
      const newProduct = 'Product ' + (products.length + 1);
      return [...products, newProduct]
    })
  }

  removeProduct() {
    this.products.update((products) => {
      return products.length > 1 ? products.slice(0, products.length - 1) : products
    })
  }

  constructor() {
    effect(() => {
      console.log(this.products())
      console.log(this.selectedproduct())
    })
  }
}
