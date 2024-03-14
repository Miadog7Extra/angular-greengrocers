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
  fruits: Item[] = [];
  vegetables: Item[] = [];

  filterTypeFruits: boolean = false;
  filterTypeVegetables: boolean = false;
  
  sortPrice: boolean = false;
  sortName: boolean = false;

  async ngOnInit() {
    this.groceries = await this.groceriesService.groceries;
    this.fruits = await this.groceriesService.fruit;
    this.vegetables = await this.groceriesService.vegetables;
  }

  sortByPrice() {
    this.sortName = false;

    const sortFunction = (a: Item, b: Item) => a.price - b.price;
    
    this.groceries.sort(sortFunction);
    this.fruits.sort(sortFunction);
    this.vegetables.sort(sortFunction);
  }

  sortByName(){
    this.sortPrice = false;

    const sortFunction = (a: Item, b: Item) => a.name.localeCompare(b.name);

    this.groceries.sort(sortFunction);
    this.fruits.sort(sortFunction);
    this.vegetables.sort(sortFunction);
  }

  getFilteredGroceries(): Item[] {
    if (this.filterTypeFruits && this.filterTypeVegetables) {
      return this.groceries
    } else if (this.filterTypeFruits) {
      return this.fruits
    } else if (this.filterTypeVegetables) {
      return this.vegetables
    } else {
      return this.groceries
    }
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
