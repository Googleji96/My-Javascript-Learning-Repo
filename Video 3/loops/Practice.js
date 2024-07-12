// Qs1. Print all even numbers from 0 to 100.----->
//Qs1. 0 से 100 तक सभी सम संख्याएँ प्रिंट करें।-------->
//-----------------------My solution (reafrens) is video 2----------------------->
// This solution is even number print ----->
/*
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log("i =", i);
  }
}
*/
//-------------------------------->
// This solution is odd number print------->
/*
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
      console.log("i =", i);
    }
  }
    */

//-------------------------------------------------------->
//Qs2.Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
//Qs2.एक गेम बनाएं जहां आप किसी भी यादृच्छिक गेम नंबर से शुरू करें। उपयोगकर्ता से गेम नंबर का अनुमान लगाते रहने के लिए कहें जब तक कि उपयोगकर्ता सही मान दर्ज न कर दे।
//--------------My solution---------->
/*
let ges = prompt("Enter your gesing number");

if (ges === 50) {
  console.log("You are right", ges);
}else{
    console.log("You are wrong", ges);
} */
//----------------------------------->
// Sharadha khapra solution------------------------------->
/*
let gameNum = 35;
let userNum = prompt("Enter your guess number");

while (userNum != gameNum) {
  userNum = prompt("you was worng. gess again");
}
console.log("congratulation, your number =", gameNum);
*/


//____________________________________________________________>
