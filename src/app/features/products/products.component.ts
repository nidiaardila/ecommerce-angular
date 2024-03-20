import { Component, inject } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  private readonly _productService = inject(ProductsService);
  products = this._productService.products;

}
