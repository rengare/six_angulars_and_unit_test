import { Component, OnInit } from '@angular/core';
import { notImplemented } from '@angular/core/src/render3/util';
import { ICustomerService } from '@app/customer/services/customer-abstract.service';
import { Customer } from '@app/customer/models/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer;

  constructor(private customerService: ICustomerService) {
  }

  ngOnInit() {
  }

  public getCustomer(id: number) {
    this.customerService.getCustomer(id)
      .subscribe(
        resp => this.customer = resp
      )
  }

}
