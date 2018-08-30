import { Injectable } from '@angular/core';
import { Customer } from '@app/customer/models/customer.model';
import { ICustomerService } from '@app/customer/services/customer-abstract.service';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

export class CustomerMockService implements ICustomerService {
    private _customer: Customer

    constructor(customer: Customer) {
        this._customer = customer;
    }
    getCustomer(id: number): Observable<Customer> {
        return of(this._customer);
    }

    getCustomers(): Observable<Customer[]> {
        return of([this._customer]);
    }
}