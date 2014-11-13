/**
 * Vernard Atkinson
 * Stung
 * WPF 1411
 * Nov. 12, 2014
 */
//alert("testing 1,2,3");

//we will be calculating how may bee stings it would take to kill an animal. :(
var weight=prompt("We will be calculating how many bee stings it would take to kill an animal.\nHow much does the victim weigh in pounds?");



//creating a validation to see if they input number or not
function validation(w){
    //create validation so if if it isn't a number to re prompt them.
    while(w===""||isNaN(w)){
        //re-prompt user
        w=prompt("What is the radius of your circle?\nPlease type in only numbers. (do not leave blank.)");
    }
    return w;
}