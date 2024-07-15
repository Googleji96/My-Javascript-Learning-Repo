//Qs. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.
// vowels function ---->
// function vowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] == "a" ||
//       str[i] == "e" ||
//       str[i] == "i" ||
//       str[i] == "o" ||
//       str[i] == "u"
//     )
//       count++;
//   }
//   return count;
// }
// console.log(vowels("hello")); // 2

//_____________________________________________
//Qs. For a given array of numbers, print the square of each value using the forEach loop.
// square function ---->
// let arr = [2, 3, 4, 5, 6, 8, 7];

// function square(arr) {
//   arr.forEach((element) => {
//     console.log(element * element);
//   });
// }
// square(arr);

//---------------------------------------------------------------->
// Sharadha khapra solution ----------------->
// let nums = [2, 3, 4, 5, 6,]
// nums.forEach((num) => {
//     console.log(num * num) // num squre
//   })
//_-------------------------------------------------------->
// second
// let nums = [67,52,39]

// let calcSqare = (num) => {
//   console.log(num * num)
// };
// nums.forEach(calcSqare) // 67 * 67 , 52 * 52 ,

//---------------------------------------------------------------->

//Qs. Create a function using the "function" keyword that takes a String as an argument
// & returns the number of consonants in the string.
// consonants function ---->
// function consonants(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != "a" && str[i] != "e" &&
//       str[i] != "i" && str[i] != "o" && str[i
//       != "u")
//---------------------------------------------------------------->
// Qs hame greter than 90 + value retarne kara hi

// let marks = [50, 60, 80, 70, 90, 85, 74, 63];

// let results = marks.filter((marks) => {
//   return marks > 70;
// });

// console.log(results);
// ____________________________________________________________________
// Qs. Create he tool of your enter number ka sum ---------> 

// let n = prompt("Enter your Marks");
// let arr = [];
// for (let i = 1; i < n; i++) {
//   arr[i - 1] = i;
// }

// console.log(arr);
// // sum ------------------------->

// let sum = arr.reduce((res, curr) => {
//   return res + curr;
// });

// console.log(sum);
// // factorial ------------->

// let factorial = arr.reduce((res, curr) => {
//   return res * curr;
// });

// console.log(factorial);

//---------------------------------------------------------/
 