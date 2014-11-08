/**
 * Vernard Atkinson
 * Math
 * WPF 1411
 * Nov. 7, 2014
 */
//alert("testing 1,2,3");

//normal rounding
//.5+ goes up else goes down
var num1=9.544;
console.log(num1);
console.log(Math.round(num1));

//floor rounding always rounds down(get rid of decimal)
var num2=6.8;
console.log(num2);
console.log(Math.floor(num2));

//ceiling rounding
//always rounds up
var num3=4.8;
console.log(num3);
console.log(Math.floor(num3));

//how to get specific number of decimals
//toFixed-not part of Math
var num4=6.7893;
console.log(num4);
console.log(num4.toFixed(2));

//random numbers
//math.random() gives values from 0 to almost one
//don't put anything in parenthesis
var num5=Math.random();
console.log(num5);

//number between 0-10
var num6=Math.random()*10;
console.log(num6);

//integers between 0-10
var num7=Math.round(Math.random()*10);
console.log(num7);

//integers between 0-100
var num8=Math.round(Math.random()*100);
console.log(num8);

//get a random integer between any 2 values
//math.random()*(max-min)+min

//random integer between 50 and 80
var num9=Math.round(Math.random()*(80-50)+50);
console.log(num9);