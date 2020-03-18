import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  product: any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.cartService.getProductById(1).subscribe(product => this.product = product);
  }

}
