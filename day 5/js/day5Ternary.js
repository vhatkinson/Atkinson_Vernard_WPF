/**
 * Vernard Atkinson
 * Ternary
 * WPF 1411
 * Nov. 5, 2014
 */
//alert("testing 1,2,3");

//if your gpa is greater than 2.0 than you graduate
var gPA=3.5;
if(gPA>2.0){
    console.log("congrats you graduate");
}else{
    console.log("sorry study harder");
}

//convert to a ternary
//(condition to test) ? true code:else code

(gPA>2.0)?console.log("congrats you graduate"):console.log("sorry study harder");

//set a variable = to outcome
//based on a kids age they will read one of 2 books
//kids under 10 read green eggs and ham
//kids 10+ read the time machine

var age=16;
var book;
book=(age>=10)?"The time machine":"Green eggs and ham";
console.log(book);

//kids 14 and older read twilight
book=(age<10)?"green eggs and ham":(age<14)?"the time machine":"twilight";
console.log(book);