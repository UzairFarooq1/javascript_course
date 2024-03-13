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





//IF statement
