import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
import { BeautyComponent } from './beauty/beauty.component';
import { MenComponent } from './men/men.component';
import { ExlusiveComponent } from './exlusive/exlusive.component';
import { FragranceComponent } from './fragrance/fragrance.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { SingleCartProductComponent } from './single-cart-product/single-cart-product.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { FormGroup, FormsModule } from '@angular/forms';
import { TopPickComponent } from './top-pick/top-pick.component';
import { AllAccesoriesComponent } from './all-accesories/all-accesories.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { StripeComponent } from './stripe/stripe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WomenComponent,
    BeautyComponent,
    MenComponent,
    ExlusiveComponent,
    FragranceComponent,
    ProductsComponent,
    FooterComponent,
    SingleCartProductComponent,
    AddToCartComponent,
    TopPickComponent,
    AllAccesoriesComponent,
    ShippingComponent,
    PaymentPageComponent,
    StripeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
