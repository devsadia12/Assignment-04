console.log ("This is ex1.js")
alert("alert");

var firstname = "Sadia";
var lastname = "Afrose";
var birthyear = 1998;
var age = 2025 - birthyear;
var student_message = "Hi, my name is " + firstname + " " + lastname + " I'm 27 age years old and im learning javascript.";
document.getElementById("student_message").innerHTML = student_message


const num1 = parseInt(document.getElementById("num_1").innerText);
const num2 = parseInt(document.getElementById("num_2").innerText);
const vagfol = num1 / num2;
const twoDecnum = vagfol.toFixed(2);
document.getElementById("result").innerText = twoDecnum;


document.getElementById("url_1").innerHTML;
//console.log(document.getElementById("url_1").innerHTML);
var url1 = "www.udemy.com";
var fullSite = "https://" + url1;
//console.log(fullSite);
document.getElementById("url_2").innerHTML = fullSite;


//document.getElementById("url_3").innerHTML;
//console.log(document.getElementById("url_3").innerHTML)
var url3 = "https://www.google.com";
var add_url = url3.replace( "https://" , " " );
//console.log(add_url);
document.getElementById("url_4").innerHTML = add_url;

var power = Math.pow(32,6);
console.log(power);

var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
phone3.toString();
if (phone1.length === 9) {
    console.log("phone1 is valid");
}else if(phone2.length === 9) {
    console.log("phone2 is valid");
}else if(phone3.length === 9) {
    console.log("phone3 is valid");
}


a) var NAME; // case sensitive

b) var $num1; // valid

c) var typeof; // valid

d) var first-name; // invalid because it has a dash (only underscores are allowed)

e) var attempt_2; // valid

f) var 2ndAttempt; // invalid because it starts with a number

g) var full name; // invalid because it contains a white space





