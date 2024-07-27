// Create a new prototype {methaod}-------------------->

// const employee = {
//   // Same Tarika of function write
//   // calcTax1: function () {
//   //   console.log("Tax rate is 10%");
//   // },
//   //----------------------------------------------------------------------->/
//   calcTax() {
//     console.log("tax rate is 10%");
//   },
// };

// const karanArjun = {
//     salary: 50000,
//     calcTax() {
//       console.log("tax rate is 20%");
//     },
// };
// const karanArjun2 = {
//   salary: 50000,
// };
// const karanArjun3 = {
//   salary: 50000,
// };

// karanArjun.__proto__ = employee; // prototype add
// karanArjun2.__proto__ = employee; // prototype add
// karanArjun3.__proto__ = employee; // prototype add

// console.log(karanArjun,karanArjun3,karanArjun2);

//----------------------------------------------------------------------->

//**************Create Classes & Object lock me ek jaise hote hai but dono defrent hote hai***************************/

// class ToyotaCar {
//   start() {
//     console.log("start");
//   }
//   stop() {
//     console.log("stop");
//   }
//   setBrand(brand) {
//     this.brandName = brand;
//   }
// }

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar();

// console.log(fortuner);
//----------------------------------------------------------------->
// *************** Useing constructor *************************>/
// is me hum brand name ko constructor me hi likh sakte hai ----->

// class ToyotaCar {
//     constructor(brand,milege){
// console.log("creating new object")
// this.brandName = brand;
// this.milege = milege;
//     }
//   start() {
//     console.log("start");
//   }
//   stop() {
//     console.log("stop");
//   }

// }

// let fortuner = new ToyotaCar("Googleji",20); //constructor and brand
// let lexus = new ToyotaCar();

// console.log(fortuner);

//***************************inheritance ********************* */
// class Parent {
//   hello() {
//     console.log("Googleji");
//   }
// }
// // Exeample of inheritance ------------------------>
// class Child extends Parent {}

// let obj = new Child();

// console.log(obj);
// --------------------- Second exeample ---------------------->

// class Person {
//   // constructor(name, age) {}
//   eat() {
//     console.log("eat");
//   }
//   sleep() {
//     console.log("sleep");
//   }
// }
// class Engineer extends Person {
//   work() {
//     console.log("solve problems,build something ");
//   }
// }
// let Googleji = new Engineer();
//------------------------------------------------------->
// class Person {
//   constructor(spacies) {
//     this.spacies = "Homo sapinens";
//   }
//   eat() {
//     console.log("eat");
//   }
//   sleep() {
//     console.log("sleep");
//   }
//   work() {
//     console.log("Do nothong");
//   }
// }
// class Engineer extends Person {
//   // Overrite kar deta hai ja same function ho tab
//   work() {
//     console.log("solve problems,build something "); // Ab ja importent yeh hai console me child wala function print hoga
//   }
// }
// let Googleji = new Engineer();

// console.log(Googleji);

//-------------------------------------------------------------->
// --------------- Super Keyword -------use power of child -------->
// class Person {
//   constructor(spacies) {
//     this.spacies = "Homo sapinens";
//   }
//   eat() {
//     console.log("eat");
//   }
// }

// class Engineer extends Person {
//   constructor(branch) {
//     super(); // toinvoke parent class constctor
//     this.brach = branch;
//   }

//   work() {
//     console.log("solve problems,build something ");
//   }
// }
// let Googleji = new Engineer("Bio");
// console.log(Googleji);
// ---------------------------------------------------------------->
// class Person {
//   constructor(name) {
//     this.spacies = "Homo sapinens";
//     this.name = name;
//   }
//   eat() {
//     console.log("eat");
//   }
// }

// class Engineer extends Person {
//   constructor(name) {
//     super(name); // new constructor ko this ko super me bi pass kiya jata hai
//   }

//   work() {
//     super.eat(); // pahile hi eat ko call karne ke liye
//     console.log("solve problems,build something ");
//   }
// }
// let Googleji = new Engineer("Gajendra");

// console.log(Googleji);

//---------------------------------------------------------->
