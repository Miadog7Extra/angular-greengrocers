import { Component, inject } from '@angular/core';
import { GroceriesService } from '../services/groceries.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  groceriesService = inject(GroceriesService)

  cart = this.groceriesService.grocierieCart

  total: number = 0;

  ngOnInit() {
    this.cart=this.groceriesService.grocierieCart
  }

  getTotal() {
    for(let grocerie of this.cart.keys()){
      //@ts-ignore
      const itemPrice: number = grocerie.price*this.cart.get(grocerie)
      this.total+=itemPrice
    }
    console.log(this.total)
    return this.total;
  }

}
