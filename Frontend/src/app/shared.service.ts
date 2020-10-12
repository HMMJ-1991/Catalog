import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from './product';

/**
* to handle shared event between category and product components
*/


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private subject = new Subject<any>();
  clickedId:string=""; // to store clicked id
  singleProductView : boolean = false;
  product : Product;

/* start of the services related to category changes */

  sendClickEvent( id){
    console.log(" in shared service the id is " + id);

    this.subject.next(id);

  }

  getClickEvent() : Observable<any> {
    return this.subject.asObservable();
  }

/* ---- end of the services related to category changes */


/* start of the services related to product view */

sendProductClickEvent( product){
  console.log(" in shared service the id is " + this.product);

  this.subject.next(this.product);

}

getProductClickEvent() : Observable<any> {
  return this.subject.asObservable();
}

/* --- end  of the services related to product view*/


}
