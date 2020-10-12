import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import products from '../files/products.json';
import { SharedService } from './../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() currentCategory:string;
  @Input() currentCategoryId:string;
  productList : Product[];

  constructor(private sharedService:SharedService) {

console.log("  >>>>>>>>>> clikced product category " + this.sharedService.clickedId);

    this.clickEventSubscription = this.sharedService.getClickEvent().subscribe( () =>{
      this.fetchProducts();
    })
  }

  clickEventSubscription : Subscription;


    fetchProducts(){
      console.log("shared service is triggered");

          // this.productList = products[this.currentCategoryId];
          this.productList = products[this.sharedService.clickedId];
    }

  ngOnInit(): void {
    this.productList = products[this.currentCategoryId];
  }

}
