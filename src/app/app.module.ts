import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CartComponent } from './cart/cart.component';
import { BckbtnComponent } from './bckbtn/bckbtn.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ShippingComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductAlertsComponent,
    CartComponent,
    BckbtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
