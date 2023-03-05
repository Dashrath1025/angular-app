import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserdataComponent } from './userdata/userdata.component';
import { QorderComponent } from './qorder/qorder.component';
import { OrderpageComponent } from './orderpage/orderpage.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
   LoginComponent,
    RegisterComponent,
    UserdataComponent,
    QorderComponent,
    OrderpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
