/**
 * Vernard Atkinson
 * zombies
 * WPF 1411
 * Nov. 10, 2014
 */
//alert("testing 1,2,3");
//zombie attack at full sail.
//it can bite 4 people a day and turn them into zombies by the next day.
// the cdc has asked us how many zombies will there be in 8 days.

//set up variables
var numZombies=1; // how many zombies we will have

var numOfBites=4; //zombies can bite 4 a day

var days=8; //number of days

//every day zombies will bite 4 people and turn them into zombies
//loop number of days

for(var i=1;i<=days;i++){

    //how many new zombies get made and when do they go bite people.
    var newZombies=numOfBites*numZombies;

    //the bitten people become zombies
    numZombies=newZombies+numZombies; // can do numZombies+=newZombies
    console.log("there are now "+numZombies+" zombies on day #"+i+"!");
}