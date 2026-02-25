{
  // type guard (oop te kibhabe kaj kore ata dekhbo)
  // type guard using instance of
  // jehetu amra ekhane type checking kortechi tai atake bole type guard/type narrowing karon narrow down kore type k specefic kore then type r jinish gula use kortechi hoyto makebark() ba makemew() call ditechi

  // instanceof guard
  // akta cls declare korlam
  class Animal {
    name: string;
    species: string;

    // proprty gula initiliaze korlam
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    // method likhlam
    makeSound() {
      console.log("I am making sound");
    }
  }



  // animal theke extend kore dog nam arekta child cls likhlam using inheritance.
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    // child cls arekta method add kore dilam
    makeBark() {
      console.log("I am barking");
    }
  }



  // animal theke extend kore cat nam arekta child cls likhlam using inheritance.
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am mewaing");
    }
  }



  // smart way te handle korar jnne chaile amra function bebohar krte pari
  // animal is Dog ata na bole, neche isDog(animal) call korle error dibe karon she jane na j animal ta ki jinish shudhu jane j boolean return korbe
  // karon amra return korbe ki sheta bolchi kintu parameter ta ki kake refer kore sheta bolinai
  // type e shudhu boolean use korle jaite dibe kintu bujhbe na animal ki jinish
  //   const isDog = (animal: Animal): boolean => {
  const isDog = (animal: Animal): animal is Dog => {
    // true return korbe jodi ai animal ta jeta call kora hoice(para) diye sheta dog r instace hole(mane instace ta dog hole)
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

 


  // cls animal keo amra chaile type hishebe bebohar korte pari
  const getAnimal = (animal: Animal) => {
    // ata pabe na karon o dekhtece j animal r moddhe(parent r moddhe makebark() nai)
    // animal.makeBark();
    // tai bole dilam j ekkhaner animal ta holo Dog r instanceof mane dog r behaivour gulao tokhon ekhane pabe
    // ekhane jokhn guard diye check kore felchi tokhon shee chintece
    // atar alternative holo 55 num line function use kore oibhabei amra pari ata instance use korte
    if (animal instanceof Dog) {
      animal.makeBark();
    } else if (animal instanceof Cat){
        // car r isntance hole tokhon mew korte dibe
        animal.makeMeaw();
    } else{
        // tokhon cat o na dog o nah tokhon basic jinish gulay dibe jegula parent r 
        animal.makeSound();
    }

    // upore smart way te handle korle aibhabe call diye padhiye dibo animal k then jetake call korbo shetar jinish guloke use korte parbo
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };



  const dog = new Dog("Dog Bhai", "dog");
  const cat = new Cat("Cat Bhai", "cat");

  getAnimal(cat);

  //
}
