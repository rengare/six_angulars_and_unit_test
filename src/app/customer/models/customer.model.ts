export class Customer {
    public id: number;

    constructor(init?: Partial<Customer>) {
        Object.assign(this, init);
    }
}