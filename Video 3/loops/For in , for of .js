//********************For of loop************************* */
//-------------------Main formula------------------->
/*
for (const iterator of object) {
    
} */
//-----Exeample =>
//----------------------------------------->
/*
let str = "GAJENDRA";

for (let i of str) {
  // i = iterator /--> object = (variable) name
  console.log("I =", i);
} */
//------------------------------------------->
// ---------lenth ------------//
/*
let str = "Gajendra";
let size = 0;

for (let i of str) {
  console.log("I =", i);
  size++;
}

console.log("str size =", size);
*/

//----------------------------------------------------->

//*******************************For in Loop*********************** */
//------Main formula _--------->
/* 

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
 } */
//----------------------------------------------------------->
//------Example ------> forin  loop
//-----this is object --->
/*
let student = {
  name: "Gajendra",
  age: 20,
  gender: "Male",
};
//-------------for in loop------------>
for (let i in student) {
  console.log("Key =", i, "elements =", student[i]);
} */
//-------------------------------------->
