{
  // Encapsulation
  // akta jaygay hide kora rakha, bayrer world r sathe sheta jeno aboddo na hoy
  // 3.5 e amra already Encapsulation dekhe felchi (access modifiers e)
  // private, protected use kore korechi (kichu kichu property ke bayrer duniya theke encapsulated kore felte partechi)
  // private (kothao use korte parbe na nijessho cls r bayre)
  // protected (extend cls e use korte parbo, instance toyri korte parbo na)
  // tobe private property k arekta get method r moddhe rekhe return korle sheta use kora jabe instance e  (18num line)

  // access modifiers e jei xmple ta amra dekhtechi sheta
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    private getBalance() {
      return this._balance;
    }

    getHiddenMethod() {
      return this.getBalance();
    }
  }

  // extend that cls
  class StudentAccount extends BankAccount {
    test() {
      this.
    }
  }

  // making instance of that class
  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
  // goribManusherAccount.balance = 0;
  goribManusherAccount.addDeposit(20);
  const myBalance = goribManusherAccount.getBalance();
  console.log(myBalance);

  // atake call korle abar getbalance() private thakleo peye jabo
  goribManusherAccount.getHiddenMethod();
}
