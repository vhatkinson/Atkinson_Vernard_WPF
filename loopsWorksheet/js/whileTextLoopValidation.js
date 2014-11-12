/**
 * Vernard Atkinson
 * Cookie while text loop
 * WPF 1411
 * Nov. 11, 2014
 */
//alert("testing 1,2,3");

//we are going to ask user if they want a cookie.
var answer=prompt("Do you want a cookie?");

//create a while for answering
while((answer!="yes" || answer!="Yes") || (answer!="no" || answer!="No")){
    //re- prompt
    answer=prompt("Please type in only yes or no:");
    if (answer==="yes" || answer==="Yes"){
        alert("Congratulations you want a cookie.");
    }else{
        alert("oh you don't want a cookie... cool story bro!");
    }
}console.log(answer);