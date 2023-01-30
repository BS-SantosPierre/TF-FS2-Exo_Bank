import { Person } from "./Person";

export class Account {
	// Attributs
	protected _accountNumber: string;
	protected _balance: number;
	protected _owner: Person;

	constructor(accountNumber: string, balance: number, owner: Person) {
		this._accountNumber = accountNumber;
		this._balance = balance;
		this._owner = owner;
	}

	// Propriétés
	public get balance(){
		return this._balance;
	}

	public get owner(){
		return this._owner;
	}

	public set owner(newOwner : Person) {
		this._owner = newOwner;
	}

	public get accountNumber(){
		return this._accountNumber;
	}

	// Méthodes
	deposit(amount: number) {
		if (amount < 0) {
			throw new Error("Amount must be positive");
		}

		this._balance += amount;
	}

	debit(amount: number) {
		if (amount < 0) {
			throw new Error("Amount must be positive");
		}

		this._balance -= amount;
	}

	applyInterest(interest: number) {
	}
}
