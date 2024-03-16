// console.log("Website");

// document.getElementById("myH1").textContent= "Welcome to my website!";
// let age =  25;
// let firstName = "John";
// let lastName = "Doe";  
// let fullName = `${firstName} ${lastName}`; 

//document.getElementById('myH1').textContent = 'Welcome Home'

//Getting inputs
//1. easy way - window prompt.

// let  userAge = prompt('Please enter your age:');
// while (userAge < 0 || isNaN(userAge)){
//         alert ('Invalid input, please enter a positive number');
// }
// console.log(userAge);

//2. professional way - creating a textbox

// document.getElementById('btnsubmit').onclick = function(){
//     let userName = document.getElementById('username').value;
//     console.log("hello "+ userName);
//     document.getElementById('myH1').textContent = `Hello ${userName}!`;
// }


//Type Conversion
// let age = window.prompt("What is your age?");
// age = Number(age); //we convert string to int/number
// age+= 1;
// console.log(age, typeof age); //output = 251; so we have to convert age to int


//Constants = can not be changed


//Counter Program
//Note: 
// innerHTML, innerText, value, and textContent are properties in JavaScript that are used to manipulate or retrieve content from HTML elements, but they have some differences in terms of their behavior:

// innerHTML:

// Provides the HTML content inside an element, including HTML tags.
// Can be used to set or get the HTML content of an element.
// May be slower and less secure than other options when setting content because it involves parsing and rendering HTML.
// javascript
// Copy code
// element.innerHTML = '<p>New HTML content</p>';
// innerText:

// Represents the text content of an element, excluding any HTML tags.
// Can be used to set or get the text content of an element.
// It automatically escapes HTML entities, making it safer for text insertion.
// javascript
// Copy code
// element.innerText = 'New text content';
// value:

// Primarily used with form elements like input, select, and textarea.
// Represents the current value of the form control.
// Used to set or get the value of an input element.
// javascript
// Copy code
// inputElement.value = 'New input value';
// textContent:

// Represents the text content of an element, similar to innerText.
// Unlike innerText, it preserves whitespace and does not trigger a reflow, making it potentially faster in certain situations.
// It includes all text, even if it's hidden with CSS.
// javascript
// Copy code
// element.textContent = 'New text content';
// Usage considerations:

// Use innerHTML when you need to manipulate or retrieve the HTML content of an element, and you are aware of the potential security risks.
// Use innerText when you want to work with the text content and need the content to be sanitized automatically.
// Use value for form elements to manipulate or retrieve their values.
// Use textContent when working with text content, and you need to preserve whitespace or have performance considerations.
// Choose the property that best suits your specific use case to ensure correct behavior and security.


// document.getElementById('add').onclick = function(){
//     let counter = Number(document.getElementById('counter').textContent);
//     counter += 1 ;
//     document.getElementById('counter').textContent = counter;
// }

// document.getElementById('reset').onclick = function(){
//     document.getElementById('counter').textContent = '0';
// }
// document.getElementById('minus').onclick = function () {
//     let counterValue = parseInt(document.getElementById('counter').innerText) - 1
//     document.getElementById('counter').innerHTML = counterValue
// }




//Math - built in objects that provide a collection of functions and methods 
// .round()
// .floor() round down always
// .ceil()  round up always
// .truncate()  remove any decimal places
// .pow(x, y)  raise x to the power of y (e.g., Math.pow(2,3)=8)
// .sqrt() square root of number
// .random() returns random floating point number between 0 and 1 inclusive of  0 but not 1
// .log()  return the natural logarithm of a number
// .sin(r)  return the sine of a number in radians
// .cos(r)   return the cosine of a number in rad
// .tan(r)   return the tangent of a number
// .abs()  return absolute value of a number
// .sign()   return the sign of a number (-1, 0, or 1)
// .max(x,y,z)   return the largest of zero or more numbers
// .min(x,y,z)   return the smallest of zero or more numbers


//Random number generator
// document.getElementById('random').onclick = function(){
//     number = Number(document.getElementById( 'randnum' ).value)
//     number = Math.floor(Math.random() * 100) + 1;
    
//     document.getElementById( 'randnum' ).textContent= number;
// }

document.getElementById('mySubmit').onclick = function(){
    age = Number(document.getElementById('age').value)
    output = document.getElementById('outputLabel')

    if(age === 0){
        output.textContent= `Please enter your correct age, you can not be ${age} year old`
    }
    else if (age >= 18) {
        output.textContent = `You are an adult`
    }
    else if (age < 18){
        output.textContent= `Your age is ${age}, you are a  minor`
    }

    else{
        output.textContent = `Please enter a valid number`
    }
}

 
const subscribe = document.getElementById('subscribe')
const visa = document.getElementById('visa')
const mastercard = document.getElementById('mastercard')
const paypal = document.getElementById('paypal')
const isSubscribed = document.getElementById('isSubscribed')
const payment = document.getElementById('payment')

document.getElementById('submit').onclick  = function () {
    // if (subscribe.checked) {
    //     isSubscribed.textContent = `You are subscribed`;
    //     payment.style.display='block'; 

    // } else{
    //     isSubscribed.textContent = `You are not subscribed`
    // }

    subscribe.checked ? isSubscribed.textContent = `You are subscribed` : isSubscribed.textContent = `You are not subscribed`;

    if (visa.checked) {
        payment.textContent = `Payment method: Visa`
        
    }else if (mastercard.checked) {
        payment.textContent = ` Payment method: MasterCard`
    }
    else if (paypal.checked) {
        payment.textContent = `Payment method: Paypal`
    }
    else {
        payment.textContent = `Please select a method of payment`

    }
}
//     day = document.getElementById('day').value;
//     label = document.getElementById('daylabel');

//     document.getElementById('checkDay').onclick = function(){
//     switch(day){
//         case day == 1:
//             label.textContent="Monday"
//             break;
//         case 2:
//             label.textContent="Tuesday"
//             break;
//         case 3:
//             label.textContent="Wednesday";
//             break;
//         case 4:
//             label.textContent="Thursday";
//             break;
//         case 5:
//             label.textContent = "Friday";
//             break;
//         case 6:
//             label.textContent = "Saturday";
//             break;
//         case 7:
//             label.textContent = "Sunday";
//             break;
//         default:
//             label.textContent = "It is not a day"

//     }
// }

//string methods
let username = "Uzair"
console.log(`Username length ${username.length}`); // Outputs -> Username length 
let lowerCaseUserName = username.toLowerCase();
console.log(`Lowercase user name ${lowerCaseUserName}`); // Outputs -> Lowercase user name uzair
let upperCaseUserName = username.toUpperCase()
console.log(`Uppercase user name ${upperCaseUserName}`) // Outputs -> Uppercase user name UZAIR
let indexOfu = username.indexOf("a");
if (indexOfu != -1) {
    console.log(`The first appearance of 'a' in the username is at position ${indexOfu}`)
} else {
    console.log("There is no 'a' in the username")
}
console.log(username.lastIndexOf("i") + 1);
console.log(username.charAt(0)); //Outputs -> U
let str = `Hello \n World`
console.log(str);
console.log(str.replace("\n", " ")) //Replaces "\n" with space

/*String trim method removes any leading and trailing white spaces from a string*/
console.log(str.trim()); //Outputs -> Hello World
console.log(username.repeat(5))
if (username.startsWith("U") && username.endsWith("r")) {
    console.log("The username starts with U and ends with r" )
    } else {
        console.log("The username does not start with u")
}
if (username.includes("a")) {
    console.log("The username includes the letter a")
} else {
    console.log("The username does not include the letter a")
}

console.log(username.split('')); //Converts all characters into an array
console.log(username.split('',2)); //Splits the string until it reaches the second argument, here empty so it will
console.log(username.split(" ")); //Same as above
let words = "This is a test for split method";
console.log(words.split(" ")); //splits by whitespace, outputs ["This","is","a","test","for","split","method"]
console.log(words.split(" ")); //splits by whitespace, outputs ["This","is","a","test","for","split" ,"method"]
console.log(words.replaceAll(" ","-")) //Replace every single space with "-".</s>
console.log(username.padStart(6,"_")); // Add "_" before username if its length less than 6
console.log(username.padEnd(8, "*")); //Add "*" after username if its length is less than 8

var fullName=prompt("Please  enter your Full Name","John Doe");
// var fullName="John Doe";
var initials=fullName.slice(0,1)+fullName.slice(fullName.lastIndexOf(" ") + 1)
alert("Welcome "+fullName+"! Your Full Name has "+fullName.length +" letters and Initials are "+initials+ ".") ;

/*Substring Method returns part of a  string between the startIndex and endIndex parameters */
console.log("Your Initial are : "+initials);

///=== checks if values are equal and if their datatypes are also equal