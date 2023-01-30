import { Account } from "./Account";
export class Current extends Account {
    // Constructeur
    constructor(accountNumber, balance, creditLine, owner) {
        // Crée l'objet selon le parent
        super(accountNumber, balance, owner);
        if (balance < creditLine) {
            throw new RangeError("Balance must be greater than credit line");
            // throw { errorMessage: "Ceci est une erreur" };
        }
        if (creditLine < 0) {
            throw new RangeError("Credit line must be positive");
        }
        this._creditLine = creditLine;
    }
    // Propriétés
    get creditLine() {
        return this._creditLine;
    }
    set creditLine(newCreditLine) {
        if (newCreditLine < 0) {
            throw new RangeError("Credit line must be positive");
        }
        this._creditLine = newCreditLine;
    }
    // Méthodes
    debit(amount) {
        if (amount < 0) {
            throw new Error("Amount must be positive");
        }
        if (amount > this._balance + this._creditLine) {
            throw new Error("Debit impossible, amount to high");
        }
        // Sucre synthaxique
        this._balance -= amount;
        // this._balance = this._balance - amount;
    }
    applyInterest() {
        const interest = (this._balance > 0) ? this._balance * 0.015 : this._balance * 0.04;
        this.deposit(interest);
    }
}
