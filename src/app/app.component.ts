import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProductserviceService } from './productservice.service';
import { AuthenService } from './authen.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }


  constructor(public dataService:ProductserviceService, public authService:AuthenService , private router: Router){
      
 }

 onLogout() {
  console.log("sucess")
  this.authService.logout();
  this.router.navigate(['/log']);

}
  

}



 