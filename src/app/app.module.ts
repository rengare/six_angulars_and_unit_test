import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ICustomerService } from '@app/customer/services/customer-abstract.service';
import { CustomerService } from '@app/customer/services/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: ICustomerService, useClass: CustomerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
