import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenService } from '../authen.service';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {
  total: number | undefined;
  quantity: number | undefined;
  pname:string|undefined|number;
  pimg:string|undefined|number;
  pid:number|undefined;
  today = new Date();
  randNumber = Math.floor(Math.random() * 1000);

  constructor(private route: ActivatedRoute,public authService:AuthenService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.total = +params['total'];
      this.quantity = +params['quantity'];
      this.pname= params['productName'];
      this.pimg=params['productImg'];
      this.pid= +params['productID'];
    });
  }

  

}