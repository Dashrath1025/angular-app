import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import { Products } from '../data/products';
import { ProductserviceService } from '../productservice.service';
import { Category } from '../data/category';
import { AuthenService } from '../authen.service';

@Component({
  selector: 'app-qorder',
  templateUrl: './qorder.component.html',
  styleUrls: ['./qorder.component.css']
})
export class QorderComponent implements OnInit{
  products:Products[] =[];
  categories: Category[] = [];
  orderproduct?:Products;
  catdis?:Category;
    productid?:number;
    authen: any;
    orderQuantity = 0;
  productPrice?: number;
  productQ?:number;
  totalPrice: number | 'Quantity is not sufficient' | undefined;
  total: string | undefined |number;


  constructor(public dataService:ProductserviceService,public router:Router, 
    public activatedroute:ActivatedRoute,public authService:AuthenService){  
    }


    ngOnInit(): void {
      this.activatedroute.paramMap.subscribe((params) => {
        console.log(params);
        this.productid = Number(params.get("id"));
        if (this.productid !== undefined) {
          this.orderproduct = this.dataService.getProduct(this.productid);
          this.productPrice = this.dataService.getProductPrice(this.productid);
          this. productQ = this.dataService.getProductQuantity(this.productid);
        }
      });
    }

    calculateTotal():  number | 'Quantity is not sufficient' | undefined{
      if (this.productPrice === undefined || this.productQ === undefined) {
        return undefined;
      }
      
      if (this.orderQuantity > this.productQ ||this.orderQuantity<0) {
        
        console.log(`Quantity is not sufficient`);
        return 'Quantity is not sufficient';
      }
      
      const total = this.productPrice * this.orderQuantity;
      console.log(`Total price: ${total}`);
      return total;
    }
    
    goToNextPage() {
      this.total = this.calculateTotal();
      if (this.total !== 'Quantity is not sufficient' && this.orderQuantity > 0) {
        this.router.navigate(['/ordersum'], {
          queryParams: {
            total: this.total,
            quantity: this.orderQuantity,
            productName: this.orderproduct?.name,
            productImg: this.orderproduct?.img
          }
        });
      }
    }
    
}