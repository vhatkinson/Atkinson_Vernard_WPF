/**
 * Vernard Atkinson
 * Nesting if statements
 * WPF 1411
 * Nov. 7, 2014
 */
//alert("testing 1,2,3");

//some dicisions depend on other decisions.
//if it is warm enough let's go to the beach if not let's go to the movies.
//if the water is warm enough let's go swimming if not get tan boyyy

//get temp
var temp=89;

//water temp
var waterTemp=80;

//if else statement
if(temp>70){
    console.log("let's go to the beach!");
}else{
    console.log("let's go to the movies!");
}

//test the water temp
if(waterTemp>75){
    console.log("let's go swimming in the water!");
}else{
    console.log("let us get tan!");
}