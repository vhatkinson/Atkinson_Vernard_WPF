/**
 * Vernard Atkinson
 * Tire Pressure
 * WPF 1411
 * Nov. 6, 2014
 */
//alert("testing 1,2,3");

//front tire pressure must mach rear tire pressure
var tirePressure=[];
tirePressure[0]=prompt("what is your front left tire pressure?");
tirePressure[1]=prompt("what is your front right tire pressure?");
tirePressure[2]=prompt("what is your back left tire pressure?");
tirePressure[3]=prompt("what is your back right tire pressure?");
console.log(tirePressure);
console.log((tirePressure[0]==tirePressure[1]) && (tirePressure[2]==tirePressure[3]));
