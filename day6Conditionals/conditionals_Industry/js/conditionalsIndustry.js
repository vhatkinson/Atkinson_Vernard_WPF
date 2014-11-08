/**
 * Vernard Atkinson
 * Conditionals Industry
 * WPF 1411
 * Nov. 7, 2014
 */
//alert("testing 1,2,3");

//we will be gathering ID information and then logging in.

//created array for ID information.
var idInfo=[];

//prompt for user name
idInfo[0]=prompt("To login to our website you mast create an account. (Don't capitalize letters) \n Create a username.");

//if they don't put anything it will make them do this until they do
while(idInfo[0]==""){
    idInfo[0]=prompt("You must enter a username.\n Create a username.");
}
//prompt user to enter a password.
idInfo[1]=prompt("Enter a password.");

//if they don't put anything it will make them do this until they do
while(idInfo[1]==""){
    idInfo[1]=prompt("You must Enter a password.");
}


//now I am making them login using the username and password they created.
alert("You must log in to access site");

//created second array for logging in.
var idInfo2=[];

// asking them for username.
idInfo2[0]=prompt("What is your username?");

//if they don't put anything it will make them do this until they do
if(idInfo2[0]==""){
    idInfo2[0]=prompt("You must enter a username.");
}else if (idInfo[0]==idInfo2[0]){//this is if the username is the same so they just continue.

}else{//this is if username is wrong.
    idInfo2[0]=prompt("You must enter the correct username in our system.");
}

//asking them for password.
idInfo2[1]=prompt("What is your password");

//if they don't put anything it will make them do this until they do
if(idInfo[1]=="") {
    idInfo[1] = prompt("You must Enter a password.");
}else if (idInfo[1]==idInfo2[1]){//this is if the password is the same.
    alert("Congratulations, you can enter the site.")
}else{//this is incase password is wrong
    idInfo2[0]=prompt("You must enter the correct password in our system.");
}  