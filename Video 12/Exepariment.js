//------- First Way of write a code use of function in setTimeout --------->
// function hello() {
//   console.log("Gooleji");
// }
// setTimeout(hello, 0);
//-------------------------Second way ------------------------>

// setTimeout(() => {
//   console.log("googleji");
// }, 3000);

//--------------------------------------------------------------->
// **********   callback frist way **********************
// function sum(a, b) {
//   console.log(a + b);
// }
// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }

// calculator(50, 50, sum);
//   ***** Second Way *********************************************/

// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }
// calculator(50, 50, (a, b) => {
//   console.log(a + b);
// });
//----------------------------------->
// function getData(dataId){
//     console.log("data", dataId);
// // }
//------------------------------------------------------------------------------------------------->
// function getData(dataId) {
//     setTimeout(() => {
//       console.log("data =", dataId);
//     }, 2000);
//   }
//   getData(1);

//   setTimeout(() => {
//     getData(2);
//   }, 2000);

//   setTimeout(() => {
//     getData(3);
//   }, 3000);
//----------------------------------------------------------------------------------------->
