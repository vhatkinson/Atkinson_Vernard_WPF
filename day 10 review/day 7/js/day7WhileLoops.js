/**
 * Vernard Atkinson
 * While Loops
 * WPF 1411
 * date
 */
//alert("testing 1,2,3");

//basic while loop
//while loop will loop through a block of code as long as condition remains true.
var counter=0; //step 1 initialize counting variable
while(counter<20){ //condition will run as long as this is true
    console.log("Some things will never end "+counter);
    //update or change counting variable
    counter++;
}
console.log("end of loop- Last counter variable "+counter);

//do while loop
//variant of while loop but code will run at least once
var i=31;

do{
   console.log("The counting number is "+i);

    //update or change counting variable
    i++;
}while(i<10);