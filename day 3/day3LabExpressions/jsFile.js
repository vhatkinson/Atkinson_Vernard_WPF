/**
 * Created by vernard on 10/31/14.
 */
//Vernard Atkinson, oct. 31, day #3, WPF, Expressions

//number of slices per pizza
var slices= 8;
//number of people at party
var people= 14;
//number of pizzas ordered
var pizzas=2;
//slices each person ate
var slicesPP= ((slices*pizzas)/people);
console.log("the number of slices each person ate were"+" "+slicesPP);

//number of slices sparky gets to eat
var sparky=((slices*pizzas)%people);
console.log("sparky gets"+" "+sparky+" "+"slices of pizza");

//grocery bills
var g1= 250;
var g2= 130;
var g3= 110;
var g4= 210;
var g5= 125;

//total amount spent on groceries
var total=g1+g2+g3+g4+g5;

//average spending
var average=(total/5);

//written out
console.log("You have spent a total of $"+total+" "+"on groceries over 5 weeks. That is an average of $"+average+" "+"per week");


//discounts
//original price
var price=100;
//discount percent
var discount=5;
//description of item
var item="jacket";
//sales tax
var tax=10;

//finding the decimal of percents
var discount2=discount/100;
var tax2=tax/100;

//price with percent
var discountprice=price-(price*discount2);
var discountTaxPrice=discountprice-(discountprice*tax2);

//finished product
console.log("Your"+" "+item+" "+"was originally $"+price+", but after a"+" "+discount+"% discount, it is now $"+discountprice+" "+"without tax, and $"+discountTaxPrice+" "+"with tax");
