/**
 * Vernard Atkinson
 * Personal Functions
 * WPF 1411
 * Nov. 14, 2014
 */
//alert("testing 1,2,3");
//I am deciding what to buy based on money i have saved up.
var money=prompt("We will be determining what you should buy based on the amount you have saved up.\n" +
"How much money do you you have saved up?");

//validating user input
while(money===""||isNaN(money)){
    //re-prompt user
    money=money("Please type in only numbers. (do not leave blank.)");
}

function budget(money) {
//I made an array for what I can buy with saved money
    (money <= 0) ? console.log("You need to save up to buy something") :
        (money <= 100) ? console.log("You could buy groceries and/or gas.") :
            (money <= 1000) ? console.log("You could buy a gaming system.") :
                (money <= 10000) ? console.log("You could buy stuff for your truck or apartment.") :
                    (money <= 100000) ? console.log("You could buy a new car!") :
                        console.log("You could buy a house.");
}