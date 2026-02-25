{
  // abstraction
  // akta idea dibe kintu kibhabe hocche sheta amra bujte parbo na
  // 2 bhabe kora jay -> using (interface) & (abstract cls);
  // class jodi kono akta structure follow kore use keyword named (implements) from that (vehicle) structure
  // oi structure jeta follow korbe abstract class shei structure fully maintain(shob property thakbe hobe) else error ashbe
  // chaile aro method add korte parbo implements e
  // interface/type declaration e amra aktu idea pacchi but actually implemention korchi amra abstact class r bhitore using implements

  // 1. interface use kore abstraction toyri kora(using implements)

  // 2. abstraction use kore abstraction toyri kora
  // abstract cls is like leader class (amra tar moto hote chai, tar gunaboli gula amra amdr moddhe ante chai)
  // oi leader k follow kori, ekhaneo amon akta class banabo jei class k baki cls gula follow korbe

  // 1.using this interface making a abstraction (can be called as leader interface)
  // agula ak akta method call() korte hobe cls e.
  interface vehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car implements vehicle {
    startEngine(): void {
      console.log("start engine");
    }
    stopEngine(): void {
      console.log("stop engine");
    }
    move(): void {
      console.log("move engine");
    }
    test(): void {
      console.log("test engine");
    }
  }

  // making instance of this class() then print that instance
  // class to upore korchi e tai ekhane just call korlei hobe
  const carPrint = new Car();
  carPrint.startEngine();
  carPrint.stopEngine();
  carPrint.move();
  carPrint.test();



  // 2. creating abstact using abstraction class (leader-class) (amon akta cls banabo jei cls k onno cls ra follow korbe)
  // abstract keyword use korte hobe() -> abstact class r age
  // (abstract cls theke instact(obj) kora jabe na) -> abstract class k follow kora jabe but tmi abstract cls theke toyri hote parba na
  // abstract k use korte hole tmke extend korte hobe shei cls k (direct isntance banate parbe na)
  // abstraction class idea ta thakbe ki kamon structure hote pare -> implemention korbo extend kore shei cls k child cls e
  // jei method/cls k abstract korbo tar age abstract keyword use korte hobe
  // shei abstract method e akta idea thakbe j -> implementation r shomoy call hobe same structure diye and void return korbe

  // abstract class
  // idea (method gulake astract use korbo jate extend e use korte pari same structure diye)
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`I am just testing`);
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("I am starting the car  engine");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log("I am moving  the car");
    }
  }
}
