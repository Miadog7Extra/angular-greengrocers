import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  
}
