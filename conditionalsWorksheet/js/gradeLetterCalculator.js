/**
 * Vernard Atkinson
 * Grade Letter Calculator
 * WPF 1411
 * Nov. 5, 2014
 */
//alert("testing 1,2,3");

//0-69 F, 70-72 D, 73-79 c, 80-89 b, 90-100 a
var grade=prompt("We are going to find out your letter grade. \n What is your percentage grade?");
grade=(grade<0)?"enter an actual grade.":
    (grade<=69)? "You have an F, Study Harder!" :
        (grade<=72)? "You have a D, you can do better!":
            (grade<=79)?"You have a C, try harder!":
                (grade<=89)?"You have a B, that's pretty good.":
                    (grade<=100)?"You have an A, Great job!":
                        "enter a real number";
console.log(grade);
alert(grade);
