import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AllAccesoriesComponent } from './all-accesories/all-accesories.component';
import { BeautyComponent } from './beauty/beauty.component';
import { ExlusiveComponent } from './exlusive/exlusive.component';
import { FragranceComponent } from './fragrance/fragrance.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { ProductsComponent } from './products/products.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SingleCartProductComponent } from './single-cart-product/single-cart-product.component';
import { StripeComponent } from './stripe/stripe.component';
import { TopPickComponent } from './top-pick/top-pick.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {
    path: 'women',
    component: WomenComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'men',
    component: MenComponent,
  },
  {
    path: 'beauty',
    component: BeautyComponent,
  },
  {
    path: 'exclusive',
    component: ExlusiveComponent,
  },
  {
    path: 'fragrance',
    component: FragranceComponent,
  },
  {
    path: 'products/:id',
    component: ProductsComponent,
  },
  {
    path: 'all-acc/:id',
    component: AllAccesoriesComponent,
  },
  {
    path: 'topPick/:id',
    component: TopPickComponent,
  },
  {
    path: 'single-product',
    component: SingleCartProductComponent,
  },
  {
    path: 'add-cart',
    component: AddToCartComponent,
  },
  {
    path: 'Shipping',
    component: ShippingComponent,
  },
  {
    path: 'payment',
    component: PaymentPageComponent,
  },
  {
    path: 'stripes',
    component: StripeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
