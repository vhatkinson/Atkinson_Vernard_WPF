/**
 * Vernard Atkinson
 * title
 * WPF 1411
 * date
 */
//alert("testing 1,2,3");

//variable scope
//inside and outside of function.

//we try to not use same names for variables but in large files it's hard bro

//when you create a variable inside of a function it only exist inside of that one function.

//create var for width in main code
var width=5;//scoped outside of the function or scoped to main code
console.log("starting width in main code is "+width);
//create function to calculate perimeter of a rectangle
function calcPeri(){
    var width=10; //scoped to the function to calcPeri
    console.log("inside function width is "+width);
    var height=20;
    var peri=width*2+height*2;
    console.log("inside of function the perimeter "+peri);
}
console.log("Before function call"+width);
calcPeri();
console.log("after function call"+width);