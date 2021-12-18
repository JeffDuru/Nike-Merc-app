import { Component, OnInit, } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems= [
     { id:1, productName: 'Nike Mercurial', qty: 1, price:100},
     { id:2, productName: 'Nike Mercurial', qty: 1, price: 150},
     { id:3, productName: 'Nike Mercurial', qty: 1, price: 200},
     { id:4, productName: 'Nike Mercurial', qty: 1, price: 250},
  ]

  cartTotal = 0

  constructor(private msg: MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: any = Product) => {
      this.addProductToCart(product)
    })

  }

  addProductToCart(product: Product){
    this.cartItems.push({
      id: product.id,
      productName : product.name,
      qty: 1,
      price: product.price
    })

    this.cartTotal = 0
      this.cartItems.forEach(item => {
        this.cartTotal +=(item.qty * item.price)
      })
  }

}
