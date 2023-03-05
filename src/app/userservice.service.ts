import { Injectable } from '@angular/core';
import { User } from './data/user';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private users: User[]=[];

  constructor() { 
    this.users =[
      
      
    ];
  }
  getUData():User[]{
    return this.users;
  }

  addUser(newuser:User):boolean{
    if(newuser != undefined){
      this.users.push(newuser);
      return true;
    }
    return false;
  }

  getUser(usser:string):User|undefined{
    let usr = this.users.find(each=> each.username==usser);
    return usr;
  }

}
