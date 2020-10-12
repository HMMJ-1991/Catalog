import {Component, OnInit} from '@angular/core';

@Component({
  selector: "app-category",
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.css']
})

export class CategoryComponent implements OnInit{

  header : string='Homepage';
  categoryList : string[];
  category : string;
  categorySelected : string;
  id : string;
  name : string;

  constructor(){
   //this.categoryList = [ { id:'001', name:'Furniture'}, {id:'002', name:'Cosmatics'}, {id:'003', name:'Food'}, {id:'004', name:'Stationary Items'}];
   this.categoryList = [ 'Furniture', 'Cosmatics', 'Food', 'Stationary Items'];
   this.category = this.categoryList[0];
   this.categorySelected = this.categoryList[0];
   console.log(this.categoryList[0]);

  }

  selectCategory(categoryName){
    this.categorySelected = categoryName;
  }

  ngOnInit(){

  }

}
