/**
 * Vernard Atkinson
 * Final Exam Wpf
 * WPF 1411
 * Nov. 19, 2014
 */
//alert("testing 1,2,3");

//prompting user for cost of item
var cost=prompt("What is the cost of the item you want to find the discount price of in $?");
//validating user prompt
while(cost<=0||isNaN(cost)||cost===""){
    cost=prompt("What is the cost of your item?\n" +
    "You must only enter numbers and they must be greater than 0.");
}

//prompting user for discount percent
var discountPercent=prompt("What is the % discount of the item you wish to find the discount price of?");
//validating user input
while(discountPercent<=0||discountPercent>=100||isNaN(discountPercent)||discountPercent===""){
    cost=prompt("What is the discount percent of your item?\n" +
    "You must only enter numbers and they must from 0-100. Please don't put % after your number.");
}

//function call for discountPrice
var result=discountPrice(cost,discountPercent);

//console logging answer
console.log("The cost of your item would be $"+result+" if the cost of the item is $"+cost+" and the discount is "+discountPercent+"%.");

//calculating the discounted price function
function discountPrice(c,dis){
    return c-((dis/100)*c);
}
