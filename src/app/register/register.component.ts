import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import{Router,ActivatedRoute} from '@angular/router';
import { User} from '../data/user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  newUser = new User(" "," "," ", 0,"");
  constructor(public dataService:UserserviceService, private router: Router){
 }
 onSubmit(addUser:NgForm)
 {
   if(addUser.valid){
    console.log("sucess")
    window. alert('Your Registered Succesfully !');
     this.dataService.addUser(this.newUser);
     this.router.navigate(['/log']);
   }
 }
 
 onReset(addUser:NgForm){
   addUser.resetForm();
 }
 
}
