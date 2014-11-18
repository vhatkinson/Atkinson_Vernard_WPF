/**
 * Vernard Atkinson
 * logical operators
 * WPF 1411
 * Nov. 5, 2014
 */
//alert("testing 1,2,3");

//&& and logical operator
//the ipad must be both
var budget=300;
var ipadPrice=500;
var payCheck=1200;

//&& logical operator
//the ipad must be both of these things
if(ipadPrice<=budget&&payCheck>1000){
    console.log("ipad is within budget and check is over a thousand");
}else{
    console.log("can't buy ipad");
}
// || or logical operator
//we can buy if one condition is met
if(ipadPrice<=budget||payCheck>1000){
    console.log("you can buy ipad");
}else{
    console.log("you can't buy ipad");
}
//&& and logical operator
//the ipad must be both
//must both be these thing or i win lottery
var wonLottery=true;

//&& logical operator
//the ipad must be both of these things
if((ipadPrice<=budget&&payCheck>1000)||wonLottery===true){
    console.log("ipad is within budget and check is over a thousand or won lottery");
}else{
    console.log("can't buy ipad");
}