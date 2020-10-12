import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import products from '../files/products.json'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() currentCategory:string;
  @Input() currentCategoryId:string;
  productList : Product[];

  constructor() {

  }


    fetchProducts(){
          this.productList = products[this.currentCategoryId];
    }

  ngOnInit(): void {
    this.productList = products[this.currentCategoryId];
  }

}
