/**
 * Created by vernard on 10/31/14.
 */
//Vernard Atkinson, oct. 31, day #3, WPF, Expressions

//number of slices per pizza
var slices= 8;
//number of people at party
var people= 14;
//number of pizzas ordered
var pizzas=2;
//slices each person ate
var slicesPP= ((slices*pizzas)/people);
console.log("the number of slices each person ate were"+" "+slicesPP);

//number of slices sparky gets to eat
var sparky=(slicesPP%(slices*pizzas));
console.log("sparky gets"+" "+sparky+" "+"slices of pizza");

//grocery bills
var g1= 250;
var g2= 130;
var g3= 110;
