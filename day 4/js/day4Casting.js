/**
 * Vernard Atkinson
 * Day 4 casting
 * WPF 1411
 * Nov/3/2014
 */
//alert("testing 1,2,3");

//casting variables-treat one variable type as another
var stringvar="6";
var results=7+stringvar;
console.log(results);

//to cast a variable as a number
//Number()-anything inside parenthesis is treated as a number
var castingResults=7+Number(stringvar);
console.log(castingResults);

//casting numbers as a string
//String() - treats anything inside as a text string

//phone number
var areaCode=407;
var firstPart=979;
var secondPart=6969;

//concatinate the phone number to one variable
var phoneNumber=String(areaCode)+String(firstPart)+String(secondPart);
console.log(phoneNumber);

var phoneNumber2="("+areaCode+")-"+firstPart+"-"+secondPart;
console.log (phoneNumber2);

//7 cats
//parsing integers
//parseInt()- looks through text string and returns the integer in it
//only first number is returned
//number has to be the first thing in text string
//if parseInt can't find it-returns NaN
//NaN- not a number
var a=parseInt("40 years");
console.log(a);
var b=parseInt("I am 40 years old");
console.log(b);

//when you prompt user it returns text string
var cupsHad=prompt("how many cups do you have?");
var cupsBought=prompt("how many cups have you bought?");

//add the number of cups had with bought
var totalCups=Number(cupsHad)+parseInt(cupsBought);
console.log(totalCups);
