/**
 * Vernard Atkinson
 * title
 * WPF 1411
 * date
 */
//alert("testing 1,2,3");

//figure out how much pizza cost per square inch and how much per slice
//prompt user for:radius of pizza, cost of pizza, and # of slices

var pizzaRadius=prompt("what it the radius of your pizza");
var cost=prompt("how much does your pizza cost?");
var pizzaSlices=prompt("How many slices are in your pizza?");

//create function to start all other functions.
function lordFunction(radius,cost,slices){
    //function call the other 3 functions and return value
    var area= pizzaArea(radius);
    var areaCost=pizzaSquareIn(area,cost);
    var slicePrice=pricePerSlice(slices,cost);
    return [areaCost,slicePrice];
}
//function call lord function
var results=lordFunction(pizzaRadius,cost,pizzaSlices);
console.log("your pizza cost $"+results[0]+" per sq. in.\nor $"+results[1]+" slice per price.");

//function; to calculate area of pizza, price per sq. in., price per slice.
function pizzaArea(r){
    return r*r*Math.PI;
}
function pizzaSquareIn(area,price){
    var costPerIn=(price/area);
    costPerIn=costPerIn.toFixed(2);
    return costPerIn;
}
function pricePerSlice(slices,price){
    var costPerSlice=price/slices;
    costPerSlice=costPerSlice.toFixed(2);
    return costPerSlice;
}