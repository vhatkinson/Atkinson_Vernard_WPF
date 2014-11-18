/**
 * Vernard Atkinson
 * Steak temp
 * WPF 1411
 * Nov. 5, 2014
 */
//alert("testing 1,2,3");

//ask for steak temp. & tell how well done it is
/*Extra-rare or Blue (bleu) 	115–120 °F
Rare (saignant) 	 	     	125–130 °F
Medium rare (à point) 	 	 	130–140 °F
Medium (demi-anglais) 	 	 	140–150 °F
Medium well (cuit) 	 	    	150–155 °F
Well done (bien cuit) 	 	 	160 °F+
*/
//declare and define variable for steak temp.
var steakTemp=prompt("what temperature is your steak in Fahrenheit?");

if(steakTemp<115){
    console.log("uncooked meat.-moo");
}else if(steakTemp<=120){
    console.log("your steak is extra-rare");
}else if(steakTemp<=130){
    console.log("steak is rare");
}else if(steakTemp<=140){
    console.log("your steak is medium rare");
}else if(steakTemp<=150){
    console.log("your steak is medium");
}else if(steakTemp<=155){
    console.log("your steak is medium well");
}else if(steakTemp<=160){
    console.log("your steak is well done");
}else{
    console.log("Your steak is burnt");
}