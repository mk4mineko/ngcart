import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart = [];

  constructor() { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cartItem'));
  }

  removeToCart(index){
    if(confirm(this.cart[index].name+' will be removed')){
      this.cart.splice(index, 1);
      localStorage.cartItem = JSON.stringify(this.cart);
    }
  }

}
