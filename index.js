let balance = 500.00;

class Account {
  constructor(username) {
    this.username = username;

    this.balance = 0;
  }
}

class Transaction {
  constructor(amount, account) {

    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value
  }
}

class Withdrawal extends Transaction{
  get value() {
    return -this.amount;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("Hi newbee");
myAccount.balance = 400;
const t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log(myAccount.balance);


