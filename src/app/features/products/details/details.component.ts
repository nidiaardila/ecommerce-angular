import { Component, Input, OnInit, Signal, inject, input } from '@angular/core';
import { Product } from '../../../shared/model/product.interface';
import { ProductsService } from '../../../services/products.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{

  tarsArray: number[] = new Array(5).fill(0);

  // @Input({ alias: 'id' }) productId!: number;
  productId = input<number>(0, { alias: 'id' });
  product!: Signal<Product | undefined>;
  // cartStore = inject(CartStore);

  private readonly _productsService = inject(ProductsService);
  private readonly _sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    this.product = this._productsService.getProductById(this.productId());
  }

  onAddToCart() {
    // this.cartStore.addToCart(this.product() as Product);
  }

//   generateSVG(index: number): SafeHtml {
//     let svgContent = null;

//     const rate = this.product()?.rating.rate as number;
// }
}
