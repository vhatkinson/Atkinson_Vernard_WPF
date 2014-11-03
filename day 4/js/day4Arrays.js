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