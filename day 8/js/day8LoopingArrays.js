/**
 * Vernard Atkinson
 * Looping Arrays
 * WPF 1411
 * Nov. 12, 2014
 */
//alert("testing 1,2,3");

//looping over arrays
//for(var i=0;i<arrayname.length;i++){}

//create array
var names=["Scooby","Shaggy","Fred","Velma","Daphne","Scrappy"];

//tell each one of that they solved the case

for(var i=0;i<names.length;i++){
    console.log("Thanks, You solved the case "+names[i]+"!");
}

//create an array of bills to pay
var bills=[50,10,5,20,10];

//create total bills var
var totalbills=0;

//let's add up each bill
for(var j=0;j<bills.length;j++){
    //add each individual bill to total bill
    //totalbills+=bills[j];
    //i only care about bills that are 20 dollars or more
    if(bills[j]>=20){
        //if true then add that bill to the total
        totalbills+=bills[j];
    }
}console.log(totalbills);
