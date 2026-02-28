{
    // polymorshism -> BohuRup (poly -> bohu) + (morphism -> rup)
    // stan,kal bhede manusher jamon rup change hoye jay temni -> kono akta method jodi stan,kal,patro bhede change hoye jay diff diff output dey shetai polymorhsism
    // class r akta particular method onno class e giye jodi sheta re-design hoy tokhon she amke diff diff rup dekhabe jodio method r nam kintu same but class diff
    // method r same structure rakhte hobe then sheta diff kichu kaj krte pare/return korte pare
    // function k call kore instance(obj)new diye jeta shetake padhiye dibo
    // ✅ ak e method but different diff instance k diye call dewar karone -> output bhinno pacchi atai polymorshism

    class Person {
        getSleep() {
          console.log(`I am sleeping for 8 hours per day`);
        }
      }
    
      class Student extends Person {
        getSleep() {
          console.log(`I am sleeping for 7 hours per day`);
        }
      }
    
      class Developer extends Person {
        getSleep() {
          console.log(`I am sleeping for 6 hours per day`);
        }
      }
    
      // creating a funtion to call the specfic instance method
      const getSleepingHours = (param: Person) => {
        // param means the person itself (we can use person class as type like this)
        param.getSleep();
      };
    
      // creating instance
      const person1 = new Person();
      const person2 = new Student();
      const person3 = new Developer();
    
      // calling the function to get data passing diff diff instance as parameter (so that we can get diff diff value)
      getSleepingHours(person1);
      getSleepingHours(person2);
      getSleepingHours(person3);
    


      // another example
      class Shape {
        getArea(): number {
          return 0;
        }
      }
    
      // pi* r* r
      class Circle extends Shape {
        radius: number;
        constructor(radius: number) {
          super();
          this.radius = radius;
        }
    
        getArea(): number {
          return Math.PI * this.radius * this.radius;
        }
      }
    
      // height * width
      class Reactangle extends Shape {
        height: number;
        width: number;
    
        constructor(height: number, width: number) {
        // calling super() bcoz if we extend a parent class it should be called super() -> if anything to pass we can pass parameter also here
          super();
          this.height = height;
          this.width = width;
        }
    
        getArea(): number {
          return this.height * this.width;
        }
      }
    
      const getShapeArea = (param: Shape) => {
        console.log(param.getArea());
      };
    
      const shape1 = new Shape();
      const shape2 = new Circle(10);
      const shape3 = new Reactangle(10, 20);
    
      // calling the function with specefic instance with value so that we can get data from that instance method
      getShapeArea(shape3);
}
