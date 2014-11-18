/**
 * Vernard Atkinson
 * Nesting if statements
 * WPF 1411
 * Nov. 7, 2014
 */
//alert("testing 1,2,3");

//some decisions depend on other decisions.
//if it is warm enough let's go to the beach if not let's go to the movies.
//if the water is warm enough let's go swimming if not get tan boyyy
//choose between a kids movie and a horror movie(are you taking a child

//get temp
var temp=prompt("What's the temperature outside?");

//water temp
var waterTemp=60;

//are you taking a child
var child=false;

//if else statement
if(temp>70){
    console.log("let's go to the beach!");
    //What is the water temperature? it over-rides previous value
    waterTemp=prompt("What's the temperature of the water?");


    //test the water temp
    if(waterTemp>75){
        console.log("let's go swimming in the water!");
    }else{
        console.log("let us get tan!");
    }
}else{
    console.log("let's go to the movies!");
    if(child){
        var childAge=prompt("How old is the child?");
        if(childAge<=6){
            console.log("let's go see the smurf movie.");
        }else{
            console.log("let's go see indiana jones.");
        }
        console.log("go see a kids film.");
    }else{
        console.log("Go see a horror film.");
    }
}

