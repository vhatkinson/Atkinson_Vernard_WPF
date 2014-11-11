/**
 * Vernard Atkinson
 * for loops
 * WPF 1411
 * Nov. 7, 2014
 */
//alert("testing 1,2,3");

//Basic for lops
///for(initialization of counter; condition to test; incriment of change)
//i stands for iteration


document.write("hello everyone <br /> heyo" );
for(var i=0;i<20;i++){
    console.log("i="+i);
}
//Breaks
//create a for loop but if counter variable is 3 i want to stop the loop
for(var j=0;j<5;j++){
    console.log("j="+j);
    //this stops code from cycling
    if(j===3){
        break;
    }
}

