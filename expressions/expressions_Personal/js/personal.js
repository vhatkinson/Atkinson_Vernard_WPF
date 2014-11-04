/**
 * Vernard Atkinson
 * Personal Expressions
 * WPF 1411
 * Nov. 3, 2014
 */
//alert("testing 1,2,3")

//calculating the cost of a new lacrosse stick with tax.

//price of the stick
var stick=prompt("We are calculating the price of your new lacrosse stick.\nEnter the price of the lacrosse stick.");
//price of the head
var head=prompt("enter the price of your lacrosse head");
//price of netting the lacrosse head.
var netting=prompt("How much did it cost to get your netting and head strung?");
//calculate total cost
var totalCost=parseInt(stick)+parseInt(head)+parseInt(netting);

console.log(totalCost);
alert("The total cost of your new lacrosse stick would be $"+totalCost);
