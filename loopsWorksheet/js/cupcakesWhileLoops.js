/**
 * Vernard Atkinson
 * cupcakes while loops
 * WPF 1411
 * Nov. 10,2014
 */
//alert("testing 1,2,3");

//making a loop for making so many cupcakes if box only makes so many.

//var for number of cupcakes you want to make
var numberCupcakes=prompt("We will be finding out how many boxes of cupcake batter it will take to make a certain number of cupcakes!" +
"\nHow many cupcakes would you like to make?");

//creating while loop if they don't enter info or id doesn't make sense.
while(numberCupcakes===""||isNaN(numberCupcakes)){
    if(numberCupcakes===""){
        numberCupcakes=prompt("How many cupcakes would you like to make? \nPlease do not leave blank.");
    }else{
        numberCupcakes=prompt("How many cupcakes would you like to make? \nPlease only type in numbers.");
    }

//number of cupcakes a box of batter makes
var cupcakesPerBox=prompt("How many cupcakes does a box of cupcake batter make?");