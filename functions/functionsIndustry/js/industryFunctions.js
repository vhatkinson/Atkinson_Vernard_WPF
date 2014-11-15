/**
 * Vernard Atkinson
 * Industry Functions
 * WPF 1411
 * Nov. 14, 2014
 */
//alert("testing 1,2,3");


//how much water will it take to fill your pool? if it is circular or square.
var poolP=prompt("We will be calculating how much water it will take to fill your hotel\'s pool.\n" +
"please type in whether your pool is circular or rectangular.");

//called upon shape function
var pool=shape(poolP);

while(pool!="circular" && pool!="Circular" && pool!="rectangular" && pool!="Rectangular"){
    //re- prompt
    pool=prompt("Please type in only circular or rectangular for the shape of your pool!");
}

if (pool==="circular"||pool==="Circular"){
    var r=prompt("What is the radius of your pool?");
    var radius=validation(r);
    var hC=prompt("What is the height of the pool?");
    var heightC=validation(hC);
    //anonymous to calculate volume of circular pool
    var cylinder=function(r,h){
        return Math.PI*r*r*h;
    };

//function call for anon function
    var cylinderVolume=cylinder(radius,heightC);
    console.log("The amount of water it would take to fill your pool would be "+cylinderVolume+" cubic meters");
}else{
    var l=prompt("what is the length of your pool in meters?");
    var length=validation(l);
    var w=prompt("what is the width of your pool in meters?");
    var width=validation(w);
    var h=prompt("What is the height of your pool in meters?");
    var height=validation(h);
    var hexahedronC=function(l,w,h){
        return l*w*h;
    };
    var hexahedron=hexahedronC(length,width,height);
    console.log("The amount of water it would take to fill your pool would be "+hexahedron+" cubic meters");
}

//loop to validate what user has entered.
function shape(pool){
    while(prompt===""||!isNaN(pool)){
        //re-prompt user
        pool=prompt("please do not leave blank and only type in circular or rectangular");
    }
    return pool;
}
function validation(prompt){
    while(prompt===""||isNaN(prompt)){
        //re-prompt user
        prompt=prompt("Please type in only numbers. (do not leave blank.)");
    }
    return prompt;
}
