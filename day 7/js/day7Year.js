/**
 * Vernard Atkinson
 * DAY 7 year
 * WPF 1411
 * nov. 10, 2014
 */
//alert("testing 1,2,3");

//console.log the whole song of 99 bottles of beer on the wall.

//setup loop
//for(initialize variable; condition; increment of change){}
for(var i=99;i>0;i--) {
    console.log(i+" bottles of beer on the wall. "+i+" bottles of beer.\n " +
    "you take one down and pass it around "+(i-1) +" bottles of beer on the wall.");
    //console.log("99 bottles of beer on the wall. 99 bottles of beer");
    //console.log("You take on down and pass it around 98 bottles of beer on the wall.");
//add if statement testing for last case
    if(i===1){
        console.log(i+" bottle of beer on the wall. "+i+" bottle of beer.\n " +
        "you take one down and pass it around. no more bottles of beer on the wall.");
    }else if(i===2){
        console.log(i+" bottles of beer on the wall. "+i+" bottles of beer.\n " +
        "you take one down and pass it around "+(i-1) +" bottle of beer on the wall.");
    }else if(i==0){
        break
    }


}
