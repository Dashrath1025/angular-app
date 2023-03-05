import { Injectable } from '@angular/core';
import { Order } from './data/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private order: Order[]=[];
  constructor() {
    this.order=[new Order (0, 0)]   }

    getOrder():Order[]{
      return this.order;
    }
    addOrder(neworder:Order):boolean{
      if(neworder != undefined){
        this.order.push(neworder);
        return true;
      }
      return false;
    }

}
