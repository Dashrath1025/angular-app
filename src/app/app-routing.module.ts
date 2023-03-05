import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { QorderComponent } from './qorder/qorder.component';
import { OrderpageComponent } from './orderpage/orderpage.component';

const routes: Routes = [
  


  {path:'log',component:LoginComponent},
  {path:'reg',component:RegisterComponent},
  {path:'user',component:UserComponent},
  {path:'order/:id',component:QorderComponent},
  {path:'ordersum',component:OrderpageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
