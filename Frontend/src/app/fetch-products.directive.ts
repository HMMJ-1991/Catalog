import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFetchProducts]'
})
export class FetchProductsDirective {

  constructor( Element: ElementRef) {
    console.log(Element);
      // fetchProducts();
  }

}
