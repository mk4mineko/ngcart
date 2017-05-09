import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = [
    {
      name: 'hello',
      price: 32
    },
    {
      name: 'ciao',
      price: 32
    },
    {
      name: 'hola',
      price: 32
    },
  ];
  cart=[];

  constructor() { }

  ngOnInit() {

    this.cart = JSON.parse(localStorage.getItem('cartItem'));
    
  }

  addToCart(product){
    if(confirm(product.name+' will be added')){
      this.cart.push(product);
      localStorage.cartItem = JSON.stringify(this.cart);
    }
  }

}
