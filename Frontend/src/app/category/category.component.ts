import {Component, OnInit} from '@angular/core';
import { Category } from '../category';
import categories from '../files/categories.json';
import { SharedService } from './../shared.service';

@Component({
  selector: "app-category",
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.css']
})

export class CategoryComponent implements OnInit{

  header : string='Homepage';
  // categoryList : string[];
  categoryList : Category[];
  category : string;
  categorySelected : string;
  categorySelectedId : string;
  id : string;
  name : string;
  singleProductView : boolean = false;

  constructor( private sharedService : SharedService){

    this.categoryList = categories;
   this.categorySelected = this.categoryList[0].name;
   this.categorySelectedId = this.categoryList[0].id;
   console.log(this.categoryList[0].name);

  }

/*
* select a category to view products
*/
  selectCategory(category){
    this.categorySelected = category.name;
    this.categorySelectedId = category.id;
    this.sharedService.clickedId = category.id;
    this.sharedService.sendClickEvent(category.id);

  }

  ngOnInit(){

  }

}
