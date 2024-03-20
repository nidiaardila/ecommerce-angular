import { Routes } from '@angular/router';
import { ProductsComponent } from './features/products/products.component';

export const routes: Routes = [

    {path: 'products',
     loadChildren: ()=> import('./features/products/products.routes'),
    },
    // {path: 'details/:id', loadComponent: ()=> import('./features/products/details/details.component').then((c)=> c.DetailsComponent)},
    // {path: 'card', loadComponent: ()=> import('./features/products/card/card.component').then((c)=> c.CardComponent)},
    {path: 'checkout', loadComponent: ()=> import('./features/checkout/checkout.component').then((c)=> c.CheckoutComponent)},
    {path: '', component: ProductsComponent},
    {path: '**', redirectTo:'', pathMatch:'full'},
];
