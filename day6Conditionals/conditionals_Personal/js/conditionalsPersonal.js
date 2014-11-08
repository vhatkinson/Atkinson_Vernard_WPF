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
var flyingCost=prompt("How much is a plane ticket to your destination?");
while(flyingCost==""){
    flyingCost=prompt("How much is a plane ticket to your destination?");
}
console.log(flyingCost);

//what is the MPG of your vehicle?
var mpg=prompt("What is the miles per gallon of your vehicle?");
while(mpg==""){
    mpg=prompt("What is the miles per gallon of your vehicle?");
}
console.log(mpg);

//how many miles are you from your destination?
var distance=prompt("How many miles are you from your destination?");
if (distance==""){
    distance=("How many miles are you from your destination?");
}
console.log(distance);

//what is the price of a gallon of gas?
var gas=prompt("What is the price of a gallon of gas?");
while (gas==""){
    gas=prompt("What is the price of a gallon of gas?");
}
console.log(gas);

//calculated cost of travelling.
var drivingCost=(distance/mpg)*(gas);
console.log(drivingCost);

if (flyingCost<drivingCost){//if flying is cheaper
    console.log("It would be cheaper to fly.");
}else if (flyingCost==drivingCost){ //if flying and driving cost the same
    console.log("It cost the same to drive or fly so you get to choose.");
}else{//if driving is cheaper
    console.log("It would be cheaper to drive.");
}

