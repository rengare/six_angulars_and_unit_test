import { Injectable } from '@angular/core';
import { ICustomerService } from '@app/customer/services/customer-abstract.service';
import { Customer } from '@app/customer/models/customer.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class CustomerService implements ICustomerService {
    customer = new Customer({ id: 1 });
    
    constructor() { }

    getCustomer(id: number): Observable<Customer> {
        return of(this.customer);
    }

    getCustomers(): Observable<Customer[]> {
        return of([this.customer]);
    }
}