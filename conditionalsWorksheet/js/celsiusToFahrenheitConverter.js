/**
 * Vernard Atkinson
 * Celsius to fahrenheit converter
 * WPF 1411
 * Nov. 5, 2014
 */
//alert("testing 1,2,3");
//converting celsius to fahrenheit
//°C  x  9/5 + 32 = °F
//(°F  -  32)  x  5/9 = °C
var celcius=prompt("enter the degrees in Celsius to find out what it is in Fahrenheit.");
var fahrenheit=celcius*(9/5)+32;
console.log(fahrenheit);
alert(celcius + " degrees Celcius is "+ fahrenheit +" degrees Fahrenheit.");