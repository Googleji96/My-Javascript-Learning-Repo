//Qs1. Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.
//Qs1. प्रॉम्प्ट ("एक नंबर दर्ज करें:") का उपयोग करके उपयोगकर्ता को एक नंबर इनपुट करने के लिए कहें। जांचें कि संख्या 5 का गुणज है या नहीं।
//********This solutiuon************is black box and me *** */

// let num = prompt("Enter a number:");
// if (num % 5 === 0) {
//   console.log("The number is a multiple of 5");
// } else {
//   console.log("The number is not a multiple of 5");
// }

// ********This way  ********/
/*
if (num % 5 === 0) {
  console.log(num, "The number is a multiple of 5");
} else {
  console.log(num, "The number is not a multiple of 5");
}
//*********Basec code of prompt***** */
// let name = prompt("Enter your choes")
// console.log(name);

/*-------------------------------------------------------------------------------------------------------------------------------------------------->
*//* ********************************This solution is me ********************************

Qs2. Write a code which can give grades to students according to their scores:
• 80-100, A
• 70-89, B
• 60-69, C
• 50-59, D
• 0-49, F 
----------->
Qs2. एक कोड लिखें जो छात्रों को उनके अंकों के अनुसार ग्रेड दे सके:
• 80-100, ए
• 70-89, बी
• 60-69, सी
• 50-59, डी
• 0-49, एफ*/

// let grade = prompt("Enter your numbers");
// let A = "A";
// let B = "B";
// let C = "C";
// let D = "D";
// let F = "F";

// *********Range banane ke liye hum ( score >= "num1" &&  score <= "num2" )  ----> First line code use
// *********Range banane ke liye hum ( score >= "num1" &&  score < "num2" ) ------> Second line use

// if (grade >= 90 && grade <= 100) {
//   console.log("A");
// } else if (grade >= 70 && grade < 89) {
//   console.log("B");
// } else if (grade >= 60 && grade < 69) {
//   console.log("C");
// } else if (grade >= 50 && grade < 59) {
//   console.log("D");
// } else if (grade >= 0 && grade < 49) {
//   console.log("F");
// }
//<-------------------------------------------------------------------------------------------------------------------------------------------
// ************Copilot ans*****************
/*
function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return "A";
        } else if (score >= 70 && score < 80) {
            return "B";
            } else if (score >= 60 && score < 70) {
    return "C";
  } else if (score >= 50 && score < 60) {
    return "D";
    } else {
        return "F";
}
} */
//------------------------------------------------------------------------------------------------------------------------------------------
// ******************This solution is Sharadha khapara***************

// let score = 75;
let score = prompt("Enter your Number 0-100");

let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
}

console.log("according to your score, your grade was  : ", grade);
