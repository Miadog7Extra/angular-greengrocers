import { Component, inject } from '@angular/core';
import { GroceriesService } from '../services/groceries.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  groceriesService = inject(GroceriesService)

  cart = this.groceriesService.grocierieCart

  increaseQuantity(grocerie: Item) {
    const quantity = this.cart.get(grocerie);
    //@ts-ignore
    this.cart.set(grocerie, quantity+1)
  }

  reduceQuantity(grocerie: Item) {
    const quantity = this.cart.get(grocerie);
    //@ts-ignore
    if (quantity > 1){
      //@ts-ignore
      this.cart.set(grocerie, quantity-1)
    } else {
    this.cart.delete(grocerie);
    }
  }
}
