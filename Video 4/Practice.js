//Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.
//प्रश्न. छात्रों के अंकों के साथ दी गई सारणी के लिए -> [85, 97, 44, 37, 76, 60] पूरी कक्षा के औसत अंक ज्ञात कीजिए।

//------------------------------------------------------------>
// My Solution:--->
let marks = [85, 97, 44, 37, 76,60]
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i]
    }
    console.log(sum / marks.length)