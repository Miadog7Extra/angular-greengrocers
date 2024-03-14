import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { StoreComponent } from './store/store.component';
import { TotalComponent } from './total/total.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CartComponent,
    StoreComponent,
    TotalComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule, HttpClientModule, FormsModule, RouterModule
  ],
  exports: [StoreComponent, CartComponent, TotalComponent, CheckoutComponent]
})
export class GroceriesModule { }
