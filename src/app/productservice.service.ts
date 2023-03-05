import { Injectable } from '@angular/core';
import { Products } from './data/products';
import { Category } from './data/category';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private products: Products[]=[];
  private category: Category[]=[];
  
  constructor() {
   
this.products=[new Products (101, 10001, "Apple iPhone 13", "The latest smartphone from Apple,",90,100,new Date('2023,1,1'),"./assets/images/e1.jpg"),
new Products (101, 10002, "Samsung LED", "the latest 36 inch smart Led ",300,60,new Date('2023,09,01'),"./assets/images/e2.jpg"),
new Products (102, 10003, "Barbie Dreamhouse", "The new toys in trending",75,50,new Date('2023,2,23'),"./assets/images/t1.jpg"),
new Products (102, 10004, "Funko Pop! ", "kids favorite items",60,70,new Date('2023,9,2'),"./assets/images/t2.jpg"),
new Products (103, 10005, "Ray-Ban Classic", "fashion Classic Aviator Sunglasses",120,45,new Date('2023,3,1'),"./assets/images/f1.jpg"),
new Products (103, 10006, "Gucci Leather", "the leather items",30,70,new Date('2023,2,26'),"./assets/images/f2.jpg"),
new Products (104, 10007, "Sofa", "All types of sofa set are here",30,55,new Date('2022,11,11'),"./assets/images/s1.jpg"),
new Products (104, 10008, "Tables", "The best office table",120,100,new Date('2023,1,31'),"./assets/images/s2.jpg"),

];
this.category=[new Category (101, "Electronics", "Here You will find Beauty Products "),
new Category (102, "Toys","the new age of Toys are here"),
new Category (103, "Fashion", "trending new fashion are available"),
new Category (104, "Furniture", "Furniture items are available in less price"),
];
}
getData():Products[]{
  return this.products;
}
getCData():Category[]{
  return this.category;
}

addProduct(newproduct:Products):boolean{
  if(newproduct != undefined){
    this.products.push(newproduct);
    return true;
  }
  return false;
}

getProduct(id:number):Products|undefined{
  let pro = this.products.find(each=> each.productid==id);
  return pro;
}

getProductPrice(id: number): number | undefined {
  const product = this.getProduct(id);
  return product?.rate;
}
getProductQuantity(id: number): number | undefined {
  const productq = this.getProduct(id);
  return productq?.quan;
}


   }

