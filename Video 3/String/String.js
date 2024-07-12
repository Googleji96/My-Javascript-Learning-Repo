//***********************String************************* */
//1. String is a sequence of characters
//2. String is immutable
//4. String is a reference type ------->
//5. String me (.length) name ki property or function hota hai ---->
//6. String me (.charAt) name ki function hota hai ---------->
//7. String me (.indexOf) name ki function hota hai ------>
//8. String me (.substring) name ki function hota hai
//9. String me (.concat) name ki function hota hai
//10. String me (.equals) name ki function hota hai
//11. String me (.equalsIgnoreCase) name ki function hota hai
//12. String me (.contains) name ki function hota hai
//13. String me (.replace(searchVal,newVal)) name ki function hota hai ------->
//14. String me (.replaceFirst) name ki function hota hai
//15. String me (.split) name ki function hota hai
//16. String me (.trim) name ki function hota hai
//17. String me (.toCharArray) name ki function hota hai
//18. String me (.toUpperCase) name ki function hota hai --------->
//19. String me (.toLowerCase) name ki function hota hai -------->
//20. String me .slice(Start,end?) name ki function hota hai ----->
//21. String me (str1.concat(str2)) name ki function hota hai --->
//--------------------------------------------------------------------------------------------->F
// let str = "Gajendra";
// let str2 = "Googleji";

// console.log(str, str2);
// console.log(str.length); // .length
// console.log(str[1]); // This exeample (Index)
// console.log(str[4]);
//--------------------------------------------------------------->
//-----------------I am Try (forof loop )---------------->
/*
for (const iterator of str) {
    console.log(iterator);
    
} */
//-------------------------------------------------------->
//***************Template Literals*************** */
// Templeate literals ek aur tarika hai (string) ko likh ne ka --->
//_____(` `)______ This is back tic------>
// -- ${ expression} ======> String interpolation ----->\
//------------------------------------------------------------->
// Exeample ---->

// let spacialString = `This is a template literal`;
// console.log(spacialString);
//------------------->
// let out = `your age = ${1 + 2 + 3} `;
// console.log(out);
//-------------------------------------------------------------->
//let spacialString = `This is a template literal`;--->
// Same to same use of template litrate

// let obj = {
//   name: "Gajendra",
//   age: 20,
// };
// let output = `The name = ${obj.name} your age = ${obj.age} `;
// console.log(output);
//--------------------------------------------------------------->
//------- sceap charecter------>
//  (\n) --(\t) jo kabhi print nahi hote hai but apna kaam kar dete hai-->
// Example ===>
// let str = "Gajendra\nVishwakarma"
// let str2 = "Gajendra\tVishwakarma"  ------> length me yeh bas ek hi count ho ta hai

//--------------------------------------------------------->******
//-------***************(str.toUpperCase())************---------->
/*
let strName = "Gajrndra"
console.log(strName.toUpperCase()); // This is a function
//--------------------->
let strName = "Gajrndra"
strName = strName.toUpperCase() // aisa bhi kar sakte hai --->
console.log(strName); // This is a function
*/
//-------***************(str.lowerCase()) ***************-------->
/*
let strName = "GAJENDRA";
console.log(strName.toLowerCase()); // This is a function
*/
//-------***************(str.trim()) ***************-------->

// trim() function use karne se string me jo space hai usko remove kar dete hai
/*
let Name = "Google   ji  Dada"
console.log(Name.trim()); // This is a function
*/
//--------------------------------------------------------->
