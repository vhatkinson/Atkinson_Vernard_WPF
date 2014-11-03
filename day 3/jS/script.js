/**
 * Created by vernard on 10/31/14.
 */
// Single line comment
/*
Multi line comment as big as needed
 */


alert("Hello World!");

//console log
//Programmers show variable in code
console.log("This is the console can you see it?")
//declare a variable
//Use keyword of var
var whatEver1; //declaration

//set the value of that variable

whatEver1 = 42; //definition

//storage container=value

//setup a variable and define it in the same line
var a = 2; //declare and define
console.log(a);

a=a+3;
console.log(a);

//declare a variable b
var b;

//define value of b
b=a+3;
console.log(a);
console.log(b);

//simple math
//how old we are
//2014-year born
var yearBorn = 1996;

//calculate your age
var myAge = 2014-yearBorn;

//tell user how old
console.log(myAge);

//talk about math
//+,-,*,/
//find the area of a triangle
//base*height/2
var base=20;
var height=15;
var areaTriangle = base*height/2;
console.log(areaTriangle);

//modulo-%
//gives remainder left over
var remainder = 32%10;
console.log(remainder);

//find out if odd or even
// %2 -modulo by 2
//1- odd number
//0- even

var evenOrOdd=67%2;
console.log(evenOrOdd);

//assignment operator
/*
= - assigns value to variable
++ add 1 to value of variable
-- subtracts 1 to value of the variable
+= adds number to value of variable
-= subtracts number of value of value
/= divides value of variable by number
*= multiply value of variable by number
 */

var x=1;
x++; //same as x+1
x--;

x+=2; // x= x+2
x-=1; // x=x-1

x/=2; //x=x/2
x*=8; //x=x*8

console.log(x);

//strings
//text fields of programming
//must start and end in matching quotes (single or double);

//declare and define string variable
var kermit= "light green";
var frogName= "kermit";

console.log(frogName);

//why should i bother with single or double quote
//escape character \ in front of the character
// multiline break \n new line character

var phrase= "i don\'t know \nYou never know!";
console.log(phrase);

//boolean
//light switches of programming world
//either contains true or false
var yes=true; //true boolean
var nope = "true"; //not a boolean
var lightSwitch= false;

//order of operations
//pemdas
//parenthesis, exponents, multiply, divide, add, subtract

//find quiz averages
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;

//avg. add then divide number of quizes

var averageQuiz=(quiz1+quiz2+quiz3)/3;
//don't overuse parenthesis
console.log(averageQuiz);

//calculate paramiter of rectangle
// 2 times width, 2 times height
var width=6;
var height=7;
var parameterRect= 2*width + 2*height;
console.log(parameterRect);

//concatenation- combine string together
var firstName= "kermit";
var lastName= "frog";

//concatenate 2 var into 1 var

var fullName = firstName+" "+lastName;
console.log(fullName);

var d="6";
var e="7";
var combine=d+e;
console.log(combine);

// is "6" the same a 6? no, in quote is just text.

var f=8;
var g="4";
var combine2= f+g;
console.log(combine2);

//concatinate variables
//strings as well.
var together = "the result of adding numbers is"+combine;
console.log(together);















