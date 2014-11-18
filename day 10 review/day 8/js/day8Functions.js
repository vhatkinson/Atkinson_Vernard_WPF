/**
 * Vernard Atkinson
 * title
 * WPF 1411
 * date
 */
//alert("testing 1,2,3");

//create a function -console.log hello

//function functionName(){}
function printHello(){
    //inside of the function
    console.log("Hello!");
}

//create  a second function that prints more
function printMore(){
    console.log("prints out more text.");
}

//function call go button of factory
//functionName();
printHello();
printMore();
calcArea();

//create a function to calculate the area of a rectangle.
function calcArea(){
    //create var for width height and area
    var width=20;
    var height=30;
    var area=width*height;

    //print the area
    console.log("your area is "+area)
}