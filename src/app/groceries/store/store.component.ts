import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';
import { GroceriesService } from '../services/groceries.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  constructor(private readonly groceriesService: GroceriesService) {}

  groceries: Item[] = [];

  async ngOnInit() {
    this.groceries = await this.groceriesService.groceries
  }

  getGrocieries(): Item[] {
    return this.groceries
  }

  addToCart(grocerie: Item) {
    if (this.groceriesService.grocierieCart.has(grocerie)){
      //@ts-ignore
      this.groceriesService.grocierieCart.set(grocerie, this.groceriesService.grocierieCart.get(grocerie)+1)
      console.log(this.groceriesService.grocierieCart)
    } else {
    this.groceriesService.grocierieCart.set(grocerie, 1)
    console.log(this.groceriesService.grocierieCart)
    }
  }
}
