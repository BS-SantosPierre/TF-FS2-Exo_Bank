import { Bank } from "./models/Bank.js";
import { Current } from "./models/Current.js";
import { Person } from "./models/Person.js";

const person = new Person("Doe", "John", new Date("1995-04-12"));
const person2 = new Person("Doe", "John", new Date("1995-04-12"));

console.log(person);

// const current = new Current("BE86 4242 4242 4242", 100000, 100, person);
const current = new Current("BE86 4242 4242 4242", 10000, 100, person);
const current2 = new Current("BE86 4242 4242 4242", 10000, 100, person);
const current3 = new Current("BE86 4242 4242 4242", 1000, 100, person2);
const current4 = new Current("BE86 4242 4242 4242", 100000, 100, person);

current.creditLine = 200;

const bank = new Bank("ING", [current, current2, current3]);

const total = bank.sumBalanceAccount(person2);

console.log(total);
