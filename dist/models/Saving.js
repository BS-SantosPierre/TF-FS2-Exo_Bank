import { Account } from "./Account";
export class Saving extends Account {
    constructor(accountNumber, balance, dateLastDebit, owner) {
        super(accountNumber, balance, owner);
        this._dateLastDebit = dateLastDebit;
    }
    // Propriétés
    get dateLastDebit() {
        return this._dateLastDebit;
    }
    // Méthodes
    debit(amount) {
        if (amount < 0) {
            throw new Error("Amount must be positive");
        }
        if (amount > this._balance) {
            throw new Error("Amount is too high");
        }
        this._balance -= amount;
        this._dateLastDebit = new Date();
    }
    applyInterest() {
        const interest = this._balance * 0.03;
        this.deposit(interest);
    }
}
