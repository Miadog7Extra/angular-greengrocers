import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Item } from 'src/app/models/item';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {
  
  grocierieCart: Map<Item, number> = new Map<Item, number>()

  http = inject(HttpClient)

  get groceries(): Promise<Item[]> {
    // @ts-ignore
    return firstValueFrom(this.http.get(`${environment.apiUrl}groceries`))
  }
  get vegetables(): Promise<Item[]> {
    //@ts-ignore
    return firstValueFrom(this.http.get(`${environment.apiUrl}groceries?type=vegetable`))
  }
  get fruit(): Promise<Item[]> {
    //@ts-ignore
    return firstValueFrom(this.http.get(`${environment.apiUrl}groceries?type=fruit`))
  }
}
