/**
 * Vernard Atkinson
 * Random number function
 * WPF 1411
 * Nov. 14, 2014
 */
//alert("testing 1,2,3");

//create a normal or basic function to take min and max and return a random integer between them.
//normal or basic function returns a value

//ask user for min and max var.
var min=Number(prompt("let\'s find a random number between new values\nWhat is the starting/min. number"));

//validate the users prompt
while(min===""||isNaN(min)){
    //re-prompt user for valid response
    min=prompt("Please only enter numbers and do not leave blank.");
}
var max=Number(prompt("What is the larger value or the max"));
//validate
while(max===""||isNaN(max)||min>=max){
    if(max===""){
        //user left blank
        max=Number(prompt("Do not leave blank, what is the max value?"));
    }else if(isNaN(max)){
        //user didn't input number
        max=Number(prompt("Please only type in numbers, what is the max value"));
    }else if(min>=max){
        max=Number(prompt("Please type in a number larger than the min. value, What is the max value"));
    }
}
//function call
var returnedNum=randomizer(min,max);
console.log("Your random integer between "+min+" and "+max+" is "+returnedNum);

//create an array to catch returned integers
var numbers=[];

//create a for loop and console.log 15 random integers
for(var i=0;i<15;i++){
    numbers.push(randomizer(min,max));
    console.log(numbers[i]);
}
console.log(numbers);

//create random number generating function
function randomizer(mn,mx){
    //create variable to hold random number
    var randomNumber=Math.round(Math.random()*(mx-mn)+Number(mn));
    //return the random number back to main code
    return randomNumber;
}