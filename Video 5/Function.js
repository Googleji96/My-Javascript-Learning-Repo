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