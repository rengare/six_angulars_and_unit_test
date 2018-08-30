import { Observable } from "rxjs";
import { Customer } from "@app/customer/models/customer.model";

export abstract class ICustomerService {
    abstract getCustomer(id: number): Observable<Customer>;
    abstract getCustomers(): Observable<Customer[]>;
}