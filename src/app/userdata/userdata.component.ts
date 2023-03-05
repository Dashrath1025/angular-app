import { Component } from '@angular/core';
import { User } from '../data/user';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent {
  data:User[]=[];
  users:User[]=[];
  
  constructor(public dataService:UserserviceService){
    this.users= dataService.getUData();
 
  this.data = this.users.filter(each=>1==1);  

    
 }


}
