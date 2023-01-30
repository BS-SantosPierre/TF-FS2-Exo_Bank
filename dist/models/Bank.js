export class Bank {
    constructor(_name, _accounts) {
        this._name = _name;
        this._accounts = _accounts;
    }
    // Propriétés
    get name() {
        return this._name;
    }
    // Méthodes
    getAccount(accountNumber) {
        const account = this._accounts.find((account) => {
            return account.accountNumber === accountNumber;
        });
        if (!account) {
            throw new Error("Account not found");
        }
        return account;
    }
    addAccount(account) {
        // Recherche d'un compte ayant le numéro de compte
        const accountExist = this._accounts.find((currentAccount) => {
            return currentAccount.accountNumber === account.accountNumber;
        });
        if (accountExist) {
            throw new Error("Account already exist");
        }
        this._accounts.push(account);
    }
    sumBalanceAccount(owner) {
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
