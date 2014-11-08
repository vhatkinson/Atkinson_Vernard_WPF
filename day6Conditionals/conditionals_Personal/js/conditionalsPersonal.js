/**
 * Vernard Atkinson
 * Conditionals Personal
 * WPF 1411
 * Nov. 7, 2014
 */
//alert("testing 1,2,3");

//we will be deciding if flying or driving will be a better mode of transportation in regards to cost.
alert("We are finding out if flying or driving will be a better mode of transportation. Assuming you have a car.");

//finding the cost of a plane ticket
var cost=prompt("How much is a plane ticket to your destination?");
console.log(cost);

//what is the MPG of your vehicle?
var mpg=prompt("What is the miles per gallon of your vehicle?");
console.log(mpg);

//how many miles are you from your destination?
var distance=prompt("How many miles are you from your destination?");
console.log(distance);

//what is the price of a gallon of gas?
var gas=prompt("What is the price of a gallon of gas?");
console.log(gas);

var drivingCost=(distance/mpg)*(gas);
console.log(drivingCost);



