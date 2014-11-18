/**
 * Vernard Atkinson
 * Validating Prompts
 * WPF 1411
 * Nov. 10, 2014
 */
//alert("testing 1,2,3");

//min max number find a random in-between.
//math.round(math.random()*(max-min)+min)

//ask the user for min. var
var min=prompt("let's find a random number, what\'s the minimum value?");

//test if the skip it
/*if(min===""){
    //the user skipped it.
    //re-prompt user...only works once.
    min=prompt("what's the minimum value? \nPlease do not leave blank.");
}*/

//validating uses while loops because we don't know what they will do.
/*while(min===""){
    //as long as user skips it, re-prompt
    min=prompt("what's the minimum value? \nPlease do not leave blank.");
}
//validate user information variable type
//isNaN(variable to check)
console.log(isNaN(7));//true
console.log("cat");//false

while(isNaN(min)){
    //loops as long as it is not a number
    //re-prompt the user
    min=prompt("what's the minimum value? \nPlease only type in numbers.");
}*/
//combine both test together
while(min===""||isNaN(min)){
    if(min===""){
        min=prompt("what's the minimum value? \nPlease do not leave blank.");
    }else{
        min=prompt("what's the minimum value? \nPlease only type in numbers.");
    }
}
//prompt and validate at the same time
do{
    var max=prompt("What is the max? \nPlease only type in numbers and don't leave blank.");
}while(max===""||isNaN(max));

alert(Math.round(Math.random()*(max-min)+min));

//validate if user types in exactly what you want.
var question=prompt("Please type in yes or no");
while(question!="yes" && question!="Yes" && question!="no" && question!="No"){
    //re- prompt
    question=prompt("Please type in only yes or no:");
}