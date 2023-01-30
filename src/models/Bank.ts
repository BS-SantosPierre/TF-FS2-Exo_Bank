import { Account } from "./Account.js";
import { Current } from "./Current.js";
import { Person } from "./Person.js";
import { Saving } from "./Saving.js";

export class Bank {
	constructor(
		private _name: string,
		private _accounts: Account[]
	){
	}
	// Propriétés
	public get name() {
		return this._name;
	}

	// Méthodes
	public getAccount(accountNumber: string) {
		const account = this._accounts.find((account) => {
			return account.accountNumber === accountNumber;
		});

		if (!account) {
			throw new Error("Account not found");
		}

		return account;
	}

	public addAccount(account: Account) {
		// Recherche d'un compte ayant le numéro de compte
		const accountExist = this._accounts.find((currentAccount) => {
			return currentAccount.accountNumber === account.accountNumber;
		});

		if (accountExist) {
			throw new Error("Account already exist");
		}

		this._accounts.push(account);
	}

	public sumBalanceAccount(owner: Person) {
		const sumBalance = this._accounts.reduce((total, account) => {
			if (account.owner === owner && account.balance > 0) {
				total += account.balance;
			}

			return total;
		}, 0);

		return sumBalance;
	}

	calculInterest() {
		for (const account of this._accounts) {
			account.applyInterest();
		}
	}
}
