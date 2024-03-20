import { HttpClient } from '@angular/common/http';
import { signal, inject, Injectable, EnvironmentInjector, runInInjectionContext } from '@angular/core';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../shared/model/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products =signal<Product[]>([]);
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiURL;
  private readonly _injector = inject(EnvironmentInjector);

  constructor() {
    this.getProducts();
   }

   public getProducts():void {
    this._http.get<Product[]>(`${this._endPoint}/products/?sort=desc`)
    .pipe(tap((data: Product[])=> this.products.set(data)))
    .subscribe();
   }

  //  public getProductById(id: number) {
  //   return this._http.get<Product>(`${this._endPoint}/products/${id}`);
  //  }

  public getProductById(id: number) {
    return runInInjectionContext(this._injector, () =>
      toSignal<Product>(
        this._http.get<Product>(`${this._endPoint}/products/${id}`)
      )
    );
  }
}
