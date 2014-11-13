/**
 * Vernard Atkinson
 * circumference
 * WPF 1411
 * Nov. 12, 2014
 */
//alert("testing 1,2,3");

//we are calculating the circumference of a circle

//what is the radius of the circle
var radius=prompt("We will be calculating the circumference of a circle.\n What is the radius of your circle?");
radius=validation(radius);

//making variable for the circumference
var circum=circ(radius);
console.log("The circumference of your circle is "+circum);

//created function to calculate the circumference
function circ(r){
    return (r*2*3.14)
}

//make validation for radius.
function validation(num){
    //create validation so if if it isn't a number to re prompt them.
    while(num===""||isNaN(num)){
        //re-prompt user
        num=prompt("What is the radius of your circle?\nPlease type in only numbers. (do not leave blank.)");
    }
    return num;
}