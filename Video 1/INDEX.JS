console.log("Googleji");

// This is globle variable  and not use more time

// var age = 24;
// var price = 100;
// var Real_name = "Googleji";
// var x = null;
// var y = undefined;

// console.log(typeof age, typeof Real_name, typeof price, typeof x, typeof y);
// console.log(age, Real_name, x, y, price);

// This is A Blok scope and globle variable and more time used in js [ let = no change of main let variable but change for reuselts ]

// let age = 24;
// let price = 100;
// let Real_name = "Googleji";
// let x = null;
// let y = undefined;

// console.log(typeof age, typeof Real_name, typeof price, typeof x, typeof y);
// console.log(age, Real_name, x, y, price);

// This variable is used for no change data js [ code const = no change ]

// const age = 24;
// const price = 100;
// const Real_name = "Googleji";
// const x = null;
// const y = undefined;

// console.log(typeof age, typeof Real_name, typeof price, typeof x, typeof y);
// console.log(age, Real_name, x, y, price);

// This Type no used of js projects //
/*
age = 24;
price = 100;
Real_name = "Googleji";
x = null;
y = undefined;

console.log(typeof age, typeof Real_name, typeof price, typeof x, typeof y);
console.log(age, Real_name, x, y, price); */

// This is block scope exeample

/*

{
  let a = 50;
  console.log(a);
  // redifine
  // let a = 100
  // console.log(a); // error
}
// but redifine a =
{
  let a = 500;
  console.log(a);
} 
  
*/

// This is A ( Object ) Exeample

const myfirst = {
// key : elements
  age: 24,
  fullName: "Googleji",
  price: 100,
  ctc: 5000,
};

// this code is update object value
myfirst["fullName"] = "Gajendra";
myfirst["age"] = myfirst["age"] + 5;

// This code is print key value

console.log(myfirst.age);
console.log(myfirst["age"]);
console.log(myfirst);
