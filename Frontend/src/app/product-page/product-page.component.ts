import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from './../shared.service';
import { Subscription } from 'rxjs';
import { Product } from '../product';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class ProductPageComponent implements OnInit {

  @Input() singleProductView : boolean = false;
  clickEventSubscription : Subscription;
  private product: Product;

// for images
  showNavigationArrows = true;
  showNavigationIndicators = false;
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor( private sharedService : SharedService, config: NgbCarouselConfig ) {

    // customize default values of carousels used by this component tree
config.showNavigationArrows = true;
config.showNavigationIndicators = true;

    // product view event
    this.clickEventSubscription = this.sharedService.getProductClickEvent().subscribe( () =>{
      this.viewProductDetails(this.sharedService.product);
  });


}


  viewProductDetails(product){
    this.singleProductView = true;
    console.log(" ******************* view product page" + product.name + " "  + product.price);
    this.product = product;

  }

  hideProductDetails(){
    this.singleProductView = true;
  }

  ngOnInit(): void {
  }

}
