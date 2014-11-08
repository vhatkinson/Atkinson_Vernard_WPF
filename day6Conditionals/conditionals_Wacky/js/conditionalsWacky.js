/**
 * Vernard Atkinson
 * Conditionals Wacky
 * WPF 1411
 * Nov. 7, 2014
 */
//alert("testing 1,2,3");

//finding out if you have enough tokens to get the giant teddy bear prize

//tokens you have
var tokens=prompt("We are calculating whether or not you have enough tokens to buy the prize of your choice.\n " +
"How many tokens do you have right now?");

//cost of teddy bear in tokens
var prize=prompt("How much does the prize you want cost?");

//amount of tokens you can earn in future
var projectedTokenEarning=prompt("How many tokens can you earn?");

//if amount of tokens you have is more or equal to you can get it or if you plan on getting more tokens you can buy it in the future.
var teddy;
teddy=(prize<=tokens||(projectedTokenEarning+tokens)>=prize)?("you have/will have enough tokens to buy teddy bear! :)"):
    ("You don't/won't have enough to buy teddy. :(");
console.log(teddy);
alert(teddy);
