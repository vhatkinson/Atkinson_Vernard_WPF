/**
 * Vernard Atkinson
 * Do While Loop
 * WPF 1411
 * Nov. 10, 2014
 */
//alert("testing 1,2,3");

//alert telling user what we are doing
alert("We are going to find the average of 2 numbers.");

// creating do while loop to find the what the average of 2 numbers are.
do{
    var num1=prompt("What is your first number? \nPlease only type in numbers and don't leave blank.");
}while(num1===""||isNaN(num1));
console.log(num1);

//creating do while loop for number 2.
do{
    var num2=prompt("What is your second number? \nPlease only type in numbers and don't leave blank.");
}while(num2===""||isNaN(num2));
console.log(num2);

//finding average
var avg=(Number(num1)+Number(num2))/2;
console.log(avg);