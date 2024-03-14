import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroceriesService } from '../services/groceries.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);

  constructor() {
    console.log('CheckoutComponent initialized');
  }
  groceriesService = inject(GroceriesService)

  cart = this.groceriesService.grocierieCart

  total: number = 0;

  ngOnInit() {
    this.cart=this.groceriesService.grocierieCart
  }

  getTotal() {
    this.total = 0;
    for(let grocerie of this.cart.keys()){
      //@ts-ignore
      const itemPrice: number = grocerie.price*this.cart.get(grocerie)
      this.total+=itemPrice
    }
    return this.total;
  }
  emptyCart() {
    this.cart.clear()
  }
  
}
