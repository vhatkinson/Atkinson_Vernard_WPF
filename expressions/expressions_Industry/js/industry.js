/**
 * Vernard Atkinson
 * Industry Expressions
 * WPF 1411
 * Nov. 3, 2014
 */
//alert("testing 1,2,3");

//How much money will you make in a year
//information about yourself

//how much money is made per hour.
var salary=prompt("We will be calculating how much spending money you will have per year.\n How much do you make per hour?");
//How many hours per month do you work.
var hoursMonthly=prompt("How many hours do you work per month?");
//how much money spent on cost of living
var monthlyExpenses=prompt("how much money do you spend a month on bills, gas, and food?");
//data in an array
var personalInfo=[salary,hoursMonthly,monthlyExpenses];
console.log(personalInfo);

//calculating how much money person will make a year.
var spendingMoney =personalInfo[0]*(12*personalInfo[1])-(12*personalInfo[2]);
console.log(spendingMoney);
