//****************Synchronus & Asynchronus ************************/
// setTimeout(() => {
//   console.log("Googleji"); // code ko side me kar deta hai aur baad me print karta hai
// }, timeout);

//----------------------------------------------------------------------->
//-------********** Callbacks *********************/
// Synchronus ------- Exeample -------------->
// function sum(a, b) {
//   console.log(a + b);
// }
// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }

// calculator(50, 50, sum);

//----------------> ASynchronus ---------------------------->
// Exemaple
// const hello = () => {
//   console.log("Hello");
// };

// setTimeout(hello,2000)
//------------------------------------------------------------------->
//************************Callback Hell-------------------------- */
// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data =", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });
