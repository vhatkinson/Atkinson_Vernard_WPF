/**
 * Vernard Atkinson
 * Wacky Functions
 * WPF 1411
 * Nov. 14, 2014
 */
//alert("testing 1,2,3");

//do you know your name?
alert("We are testing if you have a memory loss disease.");
var name=prompt("What is your name?");
var testedName=text(name);

var name2=prompt("what is your name?");
var testedName2=text(name2);

if (testedName2==testedName){
    console.log("You most likely don't have a memory loss disease.");
}else{
    console.log("You may have a memory loss disease.");
}

function text(name){
    while(prompt===""||!isNaN(name)){
        //re-prompt user
        name=prompt("please enter your name");
    }
    return name;
}