/**
 * Vernard Atkinson
 * conditionals
 * WPF 1411
 * Nov. 5, 2014
 */
//alert("testing 1,2,3");

//is the child old enough to ride ride
//create boolean variable
var oldEnough=false;

//if the child is old enough console.log they can ide

//if (condition to test){
//code if true goes her
//}
if(oldEnough){
    //true code goes here
    console.log("you are old enough to ride the ride.");

} else{
    //false code goes here
    console.log("Sorry you are not old enough to ride the ride.");
}
console.log("After the if statement");

//relation operators
//compares 2 values and returns boolean

//if the kid is over 48 inches tall then he can ride the ride.

//set the kids height
var kidHeight=47;

//add a sneaker lift
var sneakerLift=2;

//create if statement
if(kidHeight>48){
    //true code goes here
    console.log("congrats your tall enough to ride");
}else if(kidHeight+sneakerLift>48){
    console.log("You can ride the ride, you cheater.");
}else{
    //false code goes here
    console.log("sorry kid you're too short.");
}