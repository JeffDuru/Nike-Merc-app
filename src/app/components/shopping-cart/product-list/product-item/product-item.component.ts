import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ProductListComponent } from '../product-list.component';
import { MessengerService } from 'src/app/services/messenger.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!: Product

  constructor(private msg: MessengerService) {}

  ngOnInit() {
  }

  handleAddToCart(){
    this.msg.sendMsg(this.productItem)
  }

}
