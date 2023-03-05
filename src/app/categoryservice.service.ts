import { Injectable } from '@angular/core';
import { Category } from './data/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  private category: Category[]=[];
  constructor() {
this.category=[new Category (101, "Electronics", "Here You will find electronics Item"),
new Category (102, "Clothes","Here you will get Mens and Womens wear cloths"),
new Category (103, "Beauty Products", "Here You will get beauty products"),
new Category (104, "Grocery", "Here You will get the grocery Item"),
];

}
getData():Category[]{
  return this.category;
}

addCategory(newcategory:Category):boolean{
  if(newcategory != undefined){
    this.category.push(newcategory);
    return true;
  }
  return false;
}
getCategory(id:number):Category|undefined{
  let emp = this.category.find(each=> each.catid==id);
  return emp;
}

editCategory(exid:number,edit:Category):boolean{
  if (edit!= undefined){
    let index = this.category.findIndex(each => each.catid == exid);
    this.category.splice(index,1,edit);
    return true;
  }
  return false;
}

}
