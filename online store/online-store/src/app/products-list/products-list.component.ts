import { Component, OnInit } from '@angular/core';

import { products } from "../products";

import { CartService } from "../cart.service";
import{ ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products = products;
  category = "";

  constructor(
    public cartService: CartService,
    private activatedRoute: ActivatedRoute,
  ) { }

  onClick(product) {
    this.cartService.addItem(product);
  }
  removeItem(item) {
    this.cartService.removeItem(item.product);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      this.category = params.get("category");
      alert(params.get("category"));

    });
  }

}
