/**
 * Vernard Atkinson
 * Returns
 * WPF 1411
 * Nov. 12, 2014
 */
//alert("testing 1,2,3");

//returning value from function
//get stuff out of things
function calcArea(w,l){
    var area=w*l;
    console.log("area in function is "+area);
    //return area var to main code
    return area;
}
//function call
//catch returned value with variable
var returnedArea=calcArea(30,20);
console.log(returnedArea);

//prompt user
var width=prompt("enter a width");
width=validation(width);

var length=prompt("enter a length");
length=validation(length);

var userArea=calcArea(width,length);
console.log("the area of your rectangle is "+userArea);

//create function to find perimeter of rectangle
function periRect(w,l){
    var perimeter=w*2+l*2;
    //return the perimeter
    return perimeter;
    //or...return w*2+l*2;
}
var userPeri=periRect(width,length);
console.log("The perimeter is "+userPeri);

//creating validation function for numbers
function validation(prompt){
    while(prompt===""||isNaN(prompt)){
        //re-prompt user
        prompt=prompt("Please type in only numbers. (do not leave blank.)");
    }
    return prompt;
}