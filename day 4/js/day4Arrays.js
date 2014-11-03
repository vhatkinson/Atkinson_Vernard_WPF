/*
Vernard Atkinson
Day 4 Arrays
WPF 1411
11/3/14
 */
//alert("testing to see if linked");

//start a basic array
var avengersNames=["Hulk","Spiderman","Iron Man"];
console.log (avengersNames);

//access specific avanger
console.log(avengersNames[1]);

//We can use a variable to represent our index number as well
var num=2;

//iron man's name
console.log(avengersNames[num]);

//add avenger to array
avengersNames[3]="thor";
console.log(avengersNames);

//figure out length of array
// .length property
//dot syntax-put a period in it.

console.log(avengersNames.length);

//add another avenger
avengersNames[avengersNames.length]="Captain America";
console.log(avengersNames);

//add black widow
avengersNames[avengersNames.length]="Black Widow";

//access the last avenger in the array
console.log(avengersNames[avengersNames.length-1]);

//new method specific to arrays called push.
//it adds whatever we put in automatically to the end of an array
avengersNames.push("Hawkeye");
console.log(avengersNames);

//pop() - removes last item in the array
//you can save popped variable if wanted.
//set variable equal to that pop method
var soloAvenger=avengersNames.pop();
console.log(avengersNames);
console.log(soloAvenger);



// pick oranges every day
//track how many oranges are picked in each day
var orangeBins=[234,473,20,709];

//how many oranges picked in total
//store that in var
var orangeTotal=orangeBins[0]+orangeBins[1]+orangeBins[2]+orangeBins[3];
console.log(orangeTotal+" is the total number of oranges picked.");

//what is the average picked
var orangeAverage= orangeTotal/orangeBins.length;
console.log("The average amount of oranges picked in "+orangeBins.length+" days is "+ orangeAverage+".");

