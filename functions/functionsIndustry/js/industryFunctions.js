/**
 * Vernard Atkinson
 * Industry Functions
 * WPF 1411
 * Nov. 14, 2014
 */
//alert("testing 1,2,3");

//how much water will it take to fill your pool? if it is circular or square.
var pool=prompt("We will be calculating how much water it will take to fill your hotel\'s pool.\n" +
"please type in whether your pool is circular or rectangular.");

//called upon shape function
var pool=shape(pool);

while(pool!="circular" && pool!="Circular" && pool!="rectangular" && pool!="Rectangular"){
    //re- prompt
    pool=prompt("Please type in only circular or rectangular for the shape of your pool!");
}









//loop to validate what user has entered.
function shape(pool){
    while(prompt===""||!isNaN(pool)){
        //re-prompt user
        pool=prompt("please do not leave blank and only type in circular or rectangular");
    }
    return pool;
}
