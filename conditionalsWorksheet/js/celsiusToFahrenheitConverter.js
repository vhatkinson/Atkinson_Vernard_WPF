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
    //calculating celsius to fahrenheit
    var celsius = prompt("enter the degrees in Celsius to find out what it is in Fahrenheit.");

    //c-f conversion rate
    var celsiusToFahrenheit = celsius * (9 / 5) + 32;
    console.log(celsiusToFahrenheit);
    alert(celsius + " degrees Celsius is " + celsiusToFahrenheit + " degrees Fahrenheit.");
}else if (temp==("f")) {
    //calculating fahrenheit to celsius
    var fahrenheit=prompt("enter the degrees in fahrenheit to find out what it is in celsius.");

    //f-c conversion rate
    var fahrenheitToCelsius=(fahrenheit-32)*(5/9);
    console.log(fahrenheitToCelsius);
    alert(fahrenheit + " degrees Fahrenheit is " + fahrenheitToCelsius + " degrees Celsius.");
}