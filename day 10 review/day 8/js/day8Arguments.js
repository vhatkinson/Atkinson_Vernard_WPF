/**
 * Vernard Atkinson
 * Arguments and parameter
 * WPF 1411
 * Nov. 12, 2014
 */
//alert("testing 1,2,3");
//argument goes in function-part of function call
//parameter catches argument and is used inside of function

//create function calculate the area of a rectangle-hard coded values-->not hard coded
function calcArea(w,l){//parameters go here.
    //var width=10;
    //var length=20;
    //var area=width*length;

    var area=w*l;
    console.log("area of rectangle is "+area);

}
//function call
calcArea(4,5);//arguments go here
calcArea(2,3);

var width=prompt("what is the width");
var length=prompt("what is the length");
calcArea(width,length);


//calculate dog years
//dog years = human years*7
function dogYears(humanAge){
    var dogAge=humanAge*7;
    console.log("you're "+dogAge+"years old in dog years");
}
//function call
dogYears(18);
var age=prompt("please type in your age");
dogYears(age);