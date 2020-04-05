import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from "../components/top-bar/top-bar.component";
import { ProductAlert } from "../components/product-alert/product-alert.component";
import { ProductDetail } from "../components/product-detail/product-detail.component";
import { CartComponent } from "../components/cart/cart.component";

import { CartService } from "../services/cart.service";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductAlert,
    ProductDetail,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: TopBarComponent },
      { path: 'products/:productId', component: ProductDetail },
      { path: 'cart', component: CartComponent }
    ])
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
