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
// *************************** Promises *****************************/

// let promise = new Promise((resolve, reject) => {
//   console.log("My Promise");
//  resolve("123")
//   // reject("some error")
// });
//------------------------------------------------------------->
// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data =", dataId);
//       resolve("success")
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// let re = getData(123)
// **********************Real life Promise use ********************/
// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("My Promise");
//     resolve("success");
//     // reject("some error")
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("Promise is solve =",res); // Jab resolve hoga tab hi print hoga
// });
// promise.catch((err) => {
//   console.log("Promise is rejected",err); // Jab reject hota hai tab yah print hota hai
// });

// ****************Promise chaing*************************/
// Exeample 1
// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some data ");
//       resolve("success");
//     }, 5000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some data2 ");
//       resolve("success");
//     }, 5000);
//   });
// }
// console.log("facthing");
// let p1 = asyncFunc();
// p1.then((res) => {
//   console.log("res = ", res);
// });
// console.log("facthing2");
// let p2 = asyncFunc2();
// p2.then((res) => {
//   console.log("res = ", res);
// });
// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some data ");
//       resolve("success");
//     }, 5000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some data2 ");
//       resolve("success");
//     }, 5000);
//   });
// }
// console.log("facthing");
// let p1 = asyncFunc();
// p1.then((res) => {
//   console.log("res = ", res);
// });
// console.log("facthing2");
// let p2 = asyncFunc2();
// p2.then((res) => {
//   console.log("res = ", res);
// });
//----------------------------------------------------->
// Exeample 2
// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some data ");
//       resolve("success");
//     }, 5000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some data2 ");
//       resolve("success");
//     }, 5000);
//   });
// }
// console.log("facthing.........");
// asyncFunc().then(() => {
//   console.log("facthing2.............");
//   asyncFunc2().then((res) => {});
// });
//______________________________________________________>
// callback hell to resolve to Promise Chain .....
// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data =", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }

// getData(1).then((res) => {
//  return getData(2)
// }).then((res)=> {
//     return getData(3)
// }).then((res) =>{
//     console.log("success");
// })
//----------------------------------->
// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res)=>{
//     console.log(res)
//   })
// });
//------------------------------------------------------------------------------->
//******************Async Await ************************************ */
// Exeample ------>

// async function hello() {
//   console.log("Googleji");
// }
// // hello()

//--------My test -------------------------->

// let Hello = async () => {
//     console.log("Async");
// }
// // Hello()  // ab haum isko ek vaiable me bhi store kar sakte hai
//----------------------------------------------------------------->
// --- Await ________________________>

function api() {
  return new Promise(() => {
    console.log("weather data");
  });
}

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data =", dataId);
      resolve("success");
    }, 2000);
  });
}
