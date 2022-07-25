class Account {
  constructor() {
    //this.username = username;
    this.transactions = [];
  }
  get balance() {
    let balance = 0;
    for (let trans of this.transactions) {
      balance += trans.value;
    }
    return balance;
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}
// abstract class
class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    if (!this.isAllowed()) {
      return false;
    }
    this.time = new Date();
    this.account.addTransaction(this);
    return true;
  }
}

class Withdrawal extends Transaction{
  get value() {
    return -this.amount;
  }
  isAllowed() {
    return (this.account.balance - this.amount >= 0);
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
  isAllowed() {
    return true;
  }
}


// DRIVER CODE BELOW
const myAccount = new Account();
console.log(myAccount);
console.log(myAccount.balance);

const tran1 = new Deposit(50, myAccount);
tran1.commit();
console.log("t1",myAccount);

const tran2 = new Withdrawal(60, myAccount);
console.log(tran2.commit());

const tran3 = new Deposit(45, myAccount);
tran3.commit();
console.log("t3",myAccount);
console.log("balance",myAccount.balance,"transHis",myAccount.transactions);

const tran4 = new Withdrawal(80, myAccount);
tran4.commit();
console.log("t4",myAccount);
console.log("balance t4", myAccount.balance);
