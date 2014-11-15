/**
 * Vernard Atkinson
 * Anonymous
 * WPF 1411
 * Nov. 14, 2014
 */
//alert("testing 1,2,3");

/*
basic function
function name(){
    //code goes here
}
anon function
var name=function(){
    code goes here
};
 */
//function call
var returnedArea2=triangleArea(4,5);
console.log("returned area for normal function"+returnedArea2);

//a normal function to find area of triangle
function triangleArea(b,h){
    return .5*b*h;
}
//function call-normal function
var returnedArea=triangleArea(4,5);
console.log("returned area for normal function"+returnedArea);

//anonymous to calculate triangle area
var anonTriArea=function(b,h){
    return .5*b*h;
};

//function call for anon function
var returnedAnon=anonTriArea(2,3);
console.log("returned area for anon function is"+returnedAnon);