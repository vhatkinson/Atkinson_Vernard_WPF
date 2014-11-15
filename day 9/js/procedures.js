/**
 * Vernard Atkinson
 * Procedures
 * WPF 1411
 * Nov. 14,2014
 */
//alert("testing 1,2,3");

//a basic function
function calcArea(width,height){
    var area=width*height;
    return area;
}

//function call
var returnedArea= calcArea(6,7);
console.log(returnedArea);

//procedure -console.log out perimeter
function calcPeri(width,height){
    var peri=width*2+height*2;
    //console.log out out inside of procedure
    console.log(peri);
    //doesn't return value
    var tempArea=calcArea(width,height);
    console.log(peri+"is the perimeter and"+tempArea+"is the area.");
}
//function call for this procedure
//do not catch with a variable.
calcPeri(6,7);