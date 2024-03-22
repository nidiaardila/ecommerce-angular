import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../../../shared/model/product.interface';
import { environment } from '../../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private readonly _http = inject(HttpClient);
  private readonly _url = environment.serverURL;

  onProceedToPay(products: Product[]) {
    return this._http
      .post(`${this._url}/checkout`, { items: products })
      // .pipe(
      //   map(async (res: any) => {
      //     const stripe = await loadStripe(environment.stripeAPIKey);
      //     stripe?.redirectToCheckout({ sessionId: res.id });
      //   })
      // )
      .subscribe({
        error: (err) => console.error('Error', err),
      });
  }
}
