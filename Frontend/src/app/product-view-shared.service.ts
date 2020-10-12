import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductViewSharedService {
    private subject = new Subject<any>();
    product : Product;


    /* start of the services related to product view */

    sendProductClickEvent( product){
      console.log(" in shared service the id is " + this.product);

      this.subject.next(product);

    }

    getProductClickEvent() : Observable<any> {
      return this.subject.asObservable();
    }

    /* --- end  of the services related to product view*/

}
