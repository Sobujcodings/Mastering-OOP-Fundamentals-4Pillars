{
  // ✅statics in oop (memory change hoy na)
  // class e paramete diye kono value na nile constructor r drkr nai.
  // akta cls k 2ta alada instance toyri kore akta diye increment() call korchi, akta diye decrement korchi
  // alada alada instance toyri kore call kore value pele -> sheta alada alada memory te allocate hoy but amra chacchi airokom alada bhabe memory khabe na

  // ✅tobe jodi ami chai je ami jei instace thekei call kori na kano ak jayga theke statically handle bhabe change hobe na/dynmaic hobe na -> alada alada memory te allocate hobe na
  // akta single value theke counter ta change hobe shetai holo static
  // tokhon shei property r age static use korbo, and sheitake tokhon tar classs r nam dhore dakte hobe
  // like static count : number = 0;  Counter.count (ekhane Counter shei cls r nam)
  // tokhon jekono instance thekei amra call kori na kano shei static property alada bhabe update hobe na aktai update hobe bar jotogula call korbo
  // method keo amra chaile static korte pari tokhon shetaokeo call korte tar cls dhore

  // ✅3ta instace likhle new diye, akbar 1 hobe then 2 then 3 -> aktai update holo, bar bar ashe nai


  // static
  {
    class Counter {
      static count: number = 0;

      static increment() {
        return (Counter.count = Counter.count + 1);
      }

      static decrement() {
        return (Counter.count = Counter.count - 1);
      }
    }

    // const instance1 = new Counter();
    console.log(Counter.increment()); // 1 -> different memory
    // 1 -> different memory

    // const instance2 = new Counter();
    console.log(Counter.increment()); // 1  --> different memory
    // 1  --> different memory

    // const instance3 = new Counter();
    console.log(Counter.increment());
    //
  }
}
