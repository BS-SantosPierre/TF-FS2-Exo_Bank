import { Account } from "./Account";
import { Person } from "./Person";

export class Saving extends Account{
	// Attributs
	private _dateLastDebit: Date;

	constructor(accountNumber: string, balance: number, dateLastDebit: Date, owner: Person) {
		super(accountNumber, balance, owner);
		this._dateLastDebit = dateLastDebit;
	}
	// Propriétés
	public get dateLastDebit() {
		return this._dateLastDebit;
	}

	// Méthodes
	debit(amount: number) {
		if (amount < 0) {
			throw new Error("Amount must be positive");
		}

		if (amount > this._balance) {
			throw new Error("Amount is too high");
		}

		this._balance -= amount;
		this._dateLastDebit = new Date();
	}

	applyInterest(){
		const interest = this._balance * 0.03;
		console.log("Hello World");
	}
}
