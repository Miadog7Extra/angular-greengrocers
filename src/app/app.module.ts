import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GroceriesModule } from './groceries/groceries.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GroceriesModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
