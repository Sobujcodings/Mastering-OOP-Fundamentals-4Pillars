{
  // ✅ access modifiers (amra ekhane access k modify korbo)
  // chaile akta type r value k modify korte pari kintu ata to onk khetrei ucit na jamon akta bank account r id k amra change korte parbo shetake amra readonly use kore access off korte pari kintu balance k to readonly diye kora jabe na karon balance update hote parbe, tobe ami to modify korte parbo na shetar jonnoi ashe access modifier
  // tar jonno jodi amra kono type r attr k private kore dei tahole sheta shei class r bayre onno kothao theke r modify kora jabe na
  // public lekha ta optional (mane globally ai property gual accessible hobe) na likhleo hobe
  // ✅ tar jonno private kichuke modify korte hole shei class r moddhe modify korte hobe outside e parbo na
  // ✅ tobe shei parent class e private property thakle sheta extend korle child class e abar shei private property ta pabo na
  // ✅ private property lekhar convention ache -> (private _balance : number) ebhabe propertyr nam dibo
  // use korbo ebhabe this._balance

  // ✅ private r akta jat bhai holo protected
  // method r ageo amra chaile public keyword ta use korte pari explicite bhabe(na korleo prblm nai)

  // ✅ protected -> tobe jodi amra chai je parent class r akta property jeta instance r moddhe avaible thakbe na tobe child extend korle shekhane availabe thakbe tahole protected use korbo amra
  // ✅ private-> r jodi chai na kotha available thabke na tahole private use korbo.


  // access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    public getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      //   this.
    }
  }

  // ai instace e amra private/protected kono property e use korte parbo na, 
  // private parbo shudhu shei cls e, protected parbo shei cls + tar extend kora child e
  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
  // goribManusherAccount.balance = 0;
  goribManusherAccount.addDeposit(20);
  const myBalance = goribManusherAccount.getBalance();
  console.log(myBalance);

  //
}
