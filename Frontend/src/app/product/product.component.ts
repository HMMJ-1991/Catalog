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
  @Input() imageList : string[];

  productList : Product[];
  productsToView : Product[];

  numberOfElements : number = 0;
  perPageElements : number = 6;  // static value for per page images
  numberOfPages : number = 0;
  currentPageNumber : number = 0;


  constructor(private sharedService : SharedService) {

console.log("  >>>>>>>>>> clikced product category " + this.sharedService.clickedId);

    this.clickEventSubscription = this.sharedService.getClickEvent().subscribe( () =>{
      this.fetchProducts();
    })
  }

  clickEventSubscription : Subscription;

  pagination(){
    this.numberOfElements = this.productList.length;
    this.numberOfPages = this.numberOfElements/ this.perPageElements;
    this.numberOfPages = Math.trunc(this.numberOfPages);

    if( (this.numberOfElements % this.perPageElements ) >0 ){
      this.numberOfPages++;
    }

    this.productsToView = this.productList.slice( (this.currentPageNumber * this.perPageElements) +1, ((this.currentPageNumber +1 ) * this.perPageElements) +1);
  }

/*
* Fetch all products of a particular category
*/
    fetchProducts(){
      console.log("shared service is triggered");

          this.productList = products[this.sharedService.clickedId];
          this.productsView = true;
          this.singleProductView =false;

          this.pagination();
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
    this.pagination();
  }



}
