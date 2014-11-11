/**
 * Vernard Atkinson
 * cupcakes while loops
 * WPF 1411
 * Nov. 10,2014
 */
//alert("testing 1,2,3");

//making a loop for making so many cupcakes if box only makes so many.

//var for number of cupcakes you want to make
var cupcakes=prompt("We will be finding out how many boxes of cupcake batter it will take to make a certain number of cupcakes!" +
"\nHow many cupcakes would you like to make?");

//creating while loop if they don't enter info or if doesn't make sense.
while(cupcakes===""||isNaN(cupcakes)) {
    if(cupcakes===""){
        cupcakes=prompt("How many cupcakes would you like to make? \nPlease do not leave blank.");
    }else{
        cupcakes=prompt("How many cupcakes would you like to make? \nPlease only type in numbers.");
    }
}
console.log(cupcakes);
//number of cupcakes a box of batter makes
var cupcakesPerBox=prompt("How many cupcakes does a box of cupcake batter make?");

//created while loop for if user don't enter info or if doesn't make sense.
while(cupcakesPerBox===""||isNaN(cupcakes)) {
        if(cupcakesPerBox===""){
            cupcakesPerBox=prompt("How many cupcakes does a box of batter make? \nPlease do not leave blank.");
        }else{
            cupcakesPerBox=prompt("How many cupcakes does a box of batter make? \nPlease only type in numbers.");
        }
}
console.log(cupcakesPerBox);

//created var for cupcakes per box.
var boxesNeeded=Math.ceil(cupcakes/cupcakesPerBox);
console.log(boxesNeeded);

var solution=("You need "+boxesNeeded+" boxes to make "+cupcakes);
console.log(solution);
alert(solution);

