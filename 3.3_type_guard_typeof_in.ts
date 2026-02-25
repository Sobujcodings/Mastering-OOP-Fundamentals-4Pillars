{
  // ✅ type guard (can be used in functional + object oriented programming)
  // typeof --> type guard
  // typoof use kore amra guard dite pari like number r sathe string k jog kora amon situation e atkate pari j nah number r sathe string jog hoy na
  // tokhon amra typeof use kore bole dibo jodi 2tai num hoy tahole jog koro, noyto num + string hole (age string e convert kore then concat koro ba jog koro)

  // ✅ in guard (2ta type r moddhe jei type e akta distinct property ache shei property kontar moddhe ache sheta ber korar jonno guard diye bolbo ata ai type thakte pare tokhon shei property pabo in guard use na korle pabo na)
  // ('role' in user) // jei user e role ache shei user r shob type pabo
  // in guard kaj kore shudhu obj r khetre


  // type guard
  type Alphaneumeric = string | number;

  const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add("2", "3");
  console.log(result1);




  // in guard
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr. Normal Bhai",
  };
  const adminUser: AdminUser = {
    name: "Mr. Admin Bhai",
    role: "admin",
  };
  getUser(adminUser);
}
