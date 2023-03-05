  import { Component, OnInit } from '@angular/core';
  import { AuthenService } from '../authen.service';
  import { User } from '../data/user';
  import { UserserviceService } from '../userservice.service';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent {
    
    loguser: User[] = [];
    data: User[]=[];

    constructor(public dataService: UserserviceService, private router: Router,public authService:AuthenService) { 
      this.loguser= dataService.getUData();
  
    this.data = this.loguser.filter(each=>1==1);  
    }

    onSubmit(email: string, password: string) {
      const user = this.loguser.find(u => u.email === email && u.password === password);
      if (user) {
        console.log("sucess")
        window. alert('Your Loggedin Succesfully !');
        this.authService.login();
        this.router.navigate(['/user']);
      }
            
      
      else {
        window. alert('Invalid Login Credentials');
        console.log("fail")
      }
    }
    
  }
