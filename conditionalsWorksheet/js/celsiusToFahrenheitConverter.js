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
var temp=prompt("enter c if converting Celsius to Fahrenheit. \n enter f if converting Fahrenheit to Celsius.");
if (temp==("c")){
    var celcius = prompt("enter the degrees in Celsius to find out what it is in Fahrenheit.");
    var celciusToFahrenheit = celcius * (9 / 5) + 32;
    console.log(celciusToFahrenheit);
    alert(celcius + " degrees Celsius is " + celciusToFahrenheit + " degrees Fahrenheit.");
}else if (temp==("f")) {
    var fahrenheit=prompt("enter the degrees in fahrenheit to find out what it is in celsius.");
    var fahrenheitToCelsius=(fahrenheit-32)*(5/9);
    

}
