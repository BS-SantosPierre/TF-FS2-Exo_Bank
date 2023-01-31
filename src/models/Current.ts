import { Account } from "./Account.js";
import { Person } from "./Person.js";

export class Current extends Account{
	// Attributs
	private _creditLine: number;

	// Constructeur
	constructor(accountNumber: string, balance: number, creditLine: number, owner: Person){
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
	public get creditLine(){
		return this._creditLine;
	}

	public set creditLine(newCreditLine : number) {
		if (newCreditLine < 0) {
			throw new RangeError("Credit line must be positive");
		}
		this._creditLine = newCreditLine;
	}
	// Méthodes
	debit(amount: number) {
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

	applyInterest(){
		const interest = (this._balance > 0) ? this._balance * 0.015 : this._balance * 0.04;
		this._balance += interest;
	}
}
