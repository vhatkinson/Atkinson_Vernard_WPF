/**
 * Vernard Atkinson
 * day 4 prompts
 * WPF 1411
 * 11/3/14.
 */
//alert("testing 1,2,3");

//ask user for input
//prompt()- asks user to input information
var yearBorn=prompt("Enter your year of birth");
console.log(yearBorn);

//figure out how old we are
var age= 2014-yearBorn;
console.log("you are "+age+" years old");

//calculate the area of a rectangle
//area = lengths * width
var length= prompt("We are going to calculate the area of a rectangle.\nPlease enter the length of your rectangle.");
var width=prompt("Please enter the width of your rectangle");

//calculate the actual area
var area=length*width;
console.log("the area of your rectangle is "+area+".");

//create results variable and then console.log it
var results= ("The area of your rectangle with a width of "+width+" and a length of "+length+" is "+area+".");
console.log(results);
alert(results);

var calculatedArea= ("The area of your rectangle with a width of "+width+" and a length of "+length+" is "+area+".");
console.log (calculatedArea);

//alert user of the information
alert ("The area of your rectangle with a width of "+width+" and a length of "+length+" is "+area+".");