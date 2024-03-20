import { Component, EventEmitter, Output, input } from '@angular/core';
import { Product } from '../../../shared/model/product.interface';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe, SlicePipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  product = input.required<Product>();
  @Output() addToCartEvent = new EventEmitter<Product>();

  onAddToCart(): void {
    this.addToCartEvent.emit(this.product());
  }

}
