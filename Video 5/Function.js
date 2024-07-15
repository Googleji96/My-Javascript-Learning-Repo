// ************************************Arrow function ************************************/
// old sum function ka arrow function version ---------->
// Hum isko single line me bhi likh sakte hai____________>

// const sum = (a, b) => {
//   return a + b;   // // yaha console log bhi karte hai
// };
// // Call the function ----------------->

// console.log(sum(2, 3)); // 5

//__________________________________________________________________

//--------------------------------For Each function ------------------>

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val) {
//   console.log(val);
// });

//__________________________________________________________
//    ***** for Each use ni arrow function *******************/

// let arr = [1, 2, 3, 4, 5];
// let c = ["Googleji", "Gajendra", "Ironman", "Thor"];

// arr.forEach((val) => {
//   console.log(val);
// });

//-------------------------------------------------------------/
// Print This function = > UpperCase --- Index ------ Array --->

// let c = ["Googleji", "Gajendra", "Ironman", "Thor"];

// c.forEach((val, idx, arr) => {
//   console.log(val.toUpperCase(), "This is index = ", idx, arr);
// });

//-------------------------------------------------------------------/
// ****** Arrow function with object **********/
// let obj = {
//   name: "Gajendra",
//   age: 25,
//   print: function () {
//     console.log("Hello", this.name);
//   },

//**************************** Map function ************************** */

// let nums = [67, 54, 55, 60];

// nums.map((val) => {
//   console.log(val * val);
// });

//--------------------------------/
// Yeh prosse se Ek new arr create ho jata hai (ya fir clone ho ja tata hai)

// let nums = [67, 54, 55, 60];

// let newArr = nums.map((val) => {
//   return val * val;
// });
// console.log(newArr) //This is new arr

// -------------------------------------------------->
// ****** Filter function **********/
// This code use for even and odd value return -------->
// let arr = [67, 54, 55, 60, 45];

// let evenArr = arr.filter((val) => {
//   return val % 2 === 0;
// });

// console.log(evenArr);
//---------------------------------------------------------->
// odd ------>

// let arr = [67, 54, 55, 60, 45];

// let evenArr = arr.filter((val) => {
//   return val % 2 !== 0;
// });
// console.log(evenArr);

//------------------------------------>
//greter thane 3

// let arr = [67, 54, 55, 60, 45];

// let evenArr = arr.filter((val) => {
//   return val > 3;
// });

// console.log(evenArr);
//----------------------------------------------------->
//****************************Reduce method ***************************/
// const array1 = [1, 2, 3, 4];
// //0+1+ 2+ 3+ 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
// (accumulator, currentValue) => accumulator + currentValue, initialValue,
// );
// console.log(sumWithInitial);
// Expected output: 10