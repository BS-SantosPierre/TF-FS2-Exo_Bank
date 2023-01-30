export class Account {
    constructor(accountNumber, balance, owner) {
        this._accountNumber = accountNumber;
        this._balance = balance;
        this._owner = owner;
    }
    // Propriétés
    get balance() {
        return this._balance;
    }
    get owner() {
        return this._owner;
    }
    set owner(newOwner) {
        this._owner = newOwner;
    }
    get accountNumber() {
        return this._accountNumber;
    }
    // Méthodes
    deposit(amount) {
        if (amount < 0) {
            throw new Error("Amount must be positive");
        }
        this._balance += amount;
    }
    debit(amount) {
        if (amount < 0) {
            throw new Error("Amount must be positive");
        }
        this._balance -= amount;
    }
    applyInterest() {
    }
}
