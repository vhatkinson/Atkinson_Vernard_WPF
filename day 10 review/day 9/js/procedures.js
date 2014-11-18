/**
 * Vernard Atkinson
 * Procedures
 * WPF 1411
 * Nov. 14,2014
 */
//alert("testing 1,2,3");


//adding prompt for calc area
var width=parseInt(prompt("We will find the area of and a perimeter. What is the Width of the rectangle?"));
var valWidth=validation(width);
console.log(valWidth);

validation(6);

//adding prompt for length
var length=parseInt(prompt("What is the length of your rectangle?"));
var valLength=validation(length);
console.log(valLength);

//function call
var returnedArea= calcPeri(valWidth,valLength);
console.log(returnedArea);

//procedure -console.log out perimeter
function calcPeri(width,height){
    var peri=(Number(width)*2)+(Number(height)*2);
    //doesn't return value
    var tempArea=(Number(width)*Number(height));
    return (peri+" is the perimeter and "+tempArea+" is the area.");
}

function validation(num){
    while(num===""||isNaN(num)){
        //re-prompt user
        num=prompt("Please type in only numbers. (do not leave blank.)");
    }
    return num;
}