import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  products: Product[] = [
    new Product(1, 'product 1', 'This is the product description 1', 100),
    new Product(2, 'product 2', 'This is the product description 2', 150),
    new Product(3, 'product 3', 'This is the product description 3', 200),
    new Product(4, 'product 4', 'This is the product description 4', 250),
    new Product(5, 'product 5', 'This is the product description 5', 300),
    new Product(6, 'product 6', 'This is the product description 6', 350),
    new Product(7, 'product 7', 'This is the product description 7', 400),
    new Product(8, 'product 8', 'This is the product description 8', 450)
  ]
  constructor(){}

  getProducts(): Product[]{
    return this.products
  }
}
