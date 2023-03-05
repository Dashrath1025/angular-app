import { Component } from '@angular/core';
import { Category } from '../data/category';
import { Products } from '../data/products';
import { ProductserviceService } from '../productservice.service';
import { AuthenService } from '../authen.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  products:Products[] =[];
  data:Products[]=[];
  categories: Category[] = [];
  authen: any;

  constructor(public dataService:ProductserviceService,public authService:AuthenService){
    this.products= dataService.getData();
  this.categories= dataService.getCData();
  this.data = this.products.filter(each=>1==1);  


    
 }


  selectedCategoryId:Category[] |undefined;
  search: string = '';
  
onDrop(){
  this.data=this.products.filter(each=>each.catid==this.selectedCategoryId);


}

onSearch() {
  this.data = this.products.filter((product) =>
    product.name.toLowerCase().includes(this.search.toLowerCase())
  );

}



 }


