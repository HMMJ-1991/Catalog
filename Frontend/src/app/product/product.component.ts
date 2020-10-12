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
  @Input() singleProductView : boolean;
  productsView : boolean = true;

  productList : Product[];

  constructor(private sharedService : SharedService) {

console.log("  >>>>>>>>>> clikced product category " + this.sharedService.clickedId);

    this.clickEventSubscription = this.sharedService.getClickEvent().subscribe( () =>{
      this.fetchProducts();
    })
  }

  clickEventSubscription : Subscription;

/*
* Fetch all products of a particular category
*/
    fetchProducts(){
      console.log("shared service is triggered");

          this.productList = products[this.sharedService.clickedId];
          this.productsView = true;
          this.singleProductView =false;

    }



/**
* view single product
*/
  viewProduct(product){
    console.log(" product view is called with id " + product.price);

    this.sharedService.clickedId = product.id;
    this.sharedService.product = product;
    this.sharedService.sendProductClickEvent(product);
    this.singleProductView = true;
    this.productsView = false;


  }


  ngOnInit(): void {
    this.productList = products[this.currentCategoryId];
  }

}
