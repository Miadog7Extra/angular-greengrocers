import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './groceries/checkout/checkout.component';
import { AppComponent } from './app.component';
import { StoreComponent } from './groceries/store/store.component';

const routes: Routes = [
    {path: '', component: StoreComponent},
    {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  