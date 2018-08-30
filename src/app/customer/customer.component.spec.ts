import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';
import { Customer } from '@app/customer/models/customer.model';
import { ICustomerService } from '@app/customer/services/customer-abstract.service';
import { CustomerMockService } from '@app/customer/services/customer.mock.service';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  let customer = new Customer({ id: 1 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerComponent],
      providers: [
        { provide: ICustomerService, useValue: new CustomerMockService(customer) }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get customer by id', () => {
    component.getCustomer(customer.id);
    fixture.detectChanges();
    expect(component.customer.id).toEqual(customer.id);
  });
});
