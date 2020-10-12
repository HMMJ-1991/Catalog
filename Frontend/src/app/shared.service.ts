import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/**
* to handle shared event between category and product components
*/


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private subject = new Subject<any>();

  sendClickEvent( id){
    console.log(" in shared service the id is " + id);

    this.subject.next(id);

  }

  getClickEvent() : Observable<any> {
    return this.subject.asObservable();
  }

  clickedId:string="";
}
