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

// document.getElementById('mySubmit').onclick = function(){
//     age = Number(document.getElementById('age').value)
//     output = document.getElementById('outputLabel')

//     if(age === 0){
//         output.textContent= `Please enter your correct age, you can not be ${age} year old`
//     }
//     else if (age >= 18) {
//         output.textContent = `You are an adult`
//     }
//     else if (age < 18){
//         output.textContent= `Your age is ${age}, you are a  minor`
//     }

//     else{
//         output.textContent = `Please enter a valid number`
//     }
// }

 
const subscribe = document.getElementById('subscribe')
const visa = document.getElementById('visa')
const mastercard = document.getElementById('mastercard')
const paypal = document.getElementById('paypal')
const isSubscribed = document.getElementById('isSubscribed')
const payment = document.getElementById('payment')

// document.getElementById('submit').onclick  = function () {
//     // if (subscribe.checked) {
//     //     isSubscribed.textContent = `You are subscribed`;
//     //     payment.style.display='block'; 

//     // } else{
//     //     isSubscribed.textContent = `You are not subscribed`
//     // }

//     subscribe.checked ? isSubscribed.textContent = `You are subscribed` : isSubscribed.textContent = `You are not subscribed`;

//     if (visa.checked) {
//         payment.textContent = `Payment method: Visa`
        
//     }else if (mastercard.checked) {
//         payment.textContent = ` Payment method: MasterCard`
//     }
//     else if (paypal.checked) {
//         payment.textContent = `Payment method: Paypal`
//     }
//     else {
//         payment.textContent = `Please select a method of payment`

//     }
// }
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
// let username = "Uzair"
// console.log(`Username length ${username.length}`); // Outputs -> Username length 
// let lowerCaseUserName = username.toLowerCase();
// console.log(`Lowercase user name ${lowerCaseUserName}`); // Outputs -> Lowercase user name uzair
// let upperCaseUserName = username.toUpperCase()
// console.log(`Uppercase user name ${upperCaseUserName}`) // Outputs -> Uppercase user name UZAIR
// let indexOfu = username.indexOf("a");
// if (indexOfu != -1) {
//     console.log(`The first appearance of 'a' in the username is at position ${indexOfu}`)
// } else {
//     console.log("There is no 'a' in the username")
// }
// console.log(username.lastIndexOf("i") + 1);
// console.log(username.charAt(0)); //Outputs -> U
// let str = `Hello \n World`
// console.log(str);
// console.log(str.replace("\n", " ")) //Replaces "\n" with space

// /*String trim method removes any leading and trailing white spaces from a string*/
// console.log(str.trim()); //Outputs -> Hello World
// console.log(username.repeat(5))
// if (username.startsWith("U") && username.endsWith("r")) {
//     console.log("The username starts with U and ends with r" )
//     } else {
//         console.log("The username does not start with u")
// }
// if (username.includes("a")) {
//     console.log("The username includes the letter a")
// } else {
//     console.log("The username does not include the letter a")
// }

// console.log(username.split('')); //Converts all characters into an array
// console.log(username.split('',2)); //Splits the string until it reaches the second argument, here empty so it will
// console.log(username.split(" ")); //Same as above
// let words = "This is a test for split method";
// console.log(words.split(" ")); //splits by whitespace, outputs ["This","is","a","test","for","split","method"]
// console.log(words.split(" ")); //splits by whitespace, outputs ["This","is","a","test","for","split" ,"method"]
// console.log(words.replaceAll(" ","-")) //Replace every single space with "-".</s>
// console.log(username.padStart(6,"_")); // Add "_" before username if its length less than 6
// console.log(username.padEnd(8, "*")); //Add "*" after username if its length is less than 8

// var fullName=prompt("Please  enter your Full Name","John Doe");
// // var fullName="John Doe";
// var initials=fullName.slice(0,1)+fullName.slice(fullName.lastIndexOf(" ") + 1)
// alert("Welcome "+fullName+"! Your Full Name has "+fullName.length +" letters and Initials are "+initials+ ".") ;

// /*Substring Method returns part of a  string between the startIndex and endIndex parameters */
// console.log("Your Initial are : "+initials);

///=== checks if values are equal and if their datatypes are also equal


///Number Guessing Game
// let maxNum = 100
// let minNum = 1
// let answer=Math.floor(Math.random()  * (maxNum - minNum + 1) + minNum);
// console.log("Answer is: ",answer)
// let running = true
// console.log(`I am thinking of a number between ${minNum} to ${maxNum}. Please guess it`)
// let guessCount=0;
// let userGuess;
// while(running){
//     userGuess=parseInt(prompt(`Enter Your Number between ${maxNum} and ${minNum} :`));
//     console.log(typeof(userGuess) );
//     if (isNaN(userGuess)) {
//         alert ("Invalid Input! Enter a valid Number")
//     }
//     else if (userGuess < minNum || userGuess>maxNum) {
//         alert (`Out Of Range ! The Number Should be Between ${maxNum} And ${minNum}`)
//     }
//         else{
//         guessCount++;
//         if(userGuess >answer ){
//             alert ('Too High')
//         }
//         else if (userGuess < answer) {
//             alert ('Too Low');
//         }
//         else {
//             alert(`Congrats You Won! The number is ${answer} in ${guessCount} Attempts`);
//             running = false
//         }
//     }
// }

//Temprature convertor
// let tempInput = document.getElementById("tempInput");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let temp

// document.getElementById("convertButton").onclick = function () {
//     if (toFahrenheit.checked) {
//         temp = Number(tempInput.value)
//         temp = ((temp * (9/5)) +32);
//         temp = temp.toFixed(1)
//         result.innerHTML = `The Temperature In Fahrenheit is ${temp}°F`;  
//     } else if (toCelsius.checked) {
//         temp = Number(tempInput.value)
//         temp = ((temp - 32) * 5 / 9);
//         temp = temp.toFixed(1)
//         result.innerHTML =`The Temperature In Celcius Is ${temp}°C`;    
//     } else {
//         alert('Please Select A Option To Continue');
//     }
// };


//Arrays
//.push("") adds item to the end
//.pop() removes last item in array
//.unshift(item) add an item to the beginning of the array and shifts other elements upwards
//.shift() remove first item from array
//.splice(start, deleteCount, item1, ....., itemN) starts at start index and deletes deleteCount items and inserts item1,..,item N and shift other items downward
//.length  gives you how many items are in the array
//.indexOf("item")  returns position of that item or -1 if it's not there
//.lastIndexOf("item") same as indexof but for the last occurrence of the item
//.includes("item") return true or false whether the array contains "item" or not
//.join(", ") joins all items with a comma and space
//.sort().reverse()  sorts the array in ascending order then reverses it
// fruits arrays
// let fruits = ["Apple", "Banana", "Orange"];
// for (let i = 0; i < fruits.length; i+=2) {
//     const element = fruits[i];
//     console.log(element);   
// }

// for (let fruit of fruits ){
//     console.log(fruit);
// }

//spread operators = allows an iterable such as an array or string to be expanded into seperate elements
const arr1 = [1, 2 ,3]
const arr2 = [4, 5, 6]
console.log([...arr1, ...arr2]) // [1, 2, 3, 4, 5,  6]
console.log(Math.max(...arr2))
console.log(...arr2);

// destructuring 
const person ={
    name: 'John',
    age: 30,
    country: 'USA'
}

const {name,age}=person;
console.log(name,age) // John 30

const hobby={
    name:'coding',
    tools:['laptop','monitor','mouse']
}

const {name:n,tools:t}=hobby;
console.log(n, t) // coding ['laptop','monitor','mouse']

//rest parameters
function getNum(...numbers){///rest = joins  all arguments together into one variable
    console.log(...numbers);///spread = seperates out each argument and logs them individually
    return (numbers)
}
const num1 = 5
const num2 = 8
const num3 = 10
const num4 = 2
const num5 = 1

const myNumbers = getNum(num1,num2,num3,num4,num5); // ["5", "8", "10", "2", "1"]
console.log(myNumbers)

function sum(...numbers) {
    let total=0
    for(let number of numbers) {
        total += number;
    }
    return total
}
function average(...numbers) {
    let total=0
    for(let number of numbers) {
        total += number;
    }
    return total/numbers.length
}
const myResult = sum(num1,num2,num3,num4,num5);
const myAverage = average(num1,num2,num3,num4,num5);
console.log("The result is "+myResult+". The average is "+myAverage+".");
console.log(average(0,1,2,3,4,5,6,7,8,9)); //getting average  of 10 numbers input manually.
console.log(myResult) // 26

function combineStrings(...strings) {
    return strings.join(" ")
}
const str1="Hello"
const str2="World!"
const combinedStr = combineStrings(str1,str2,"How","you","doing?");
console.log(combinedStr)


//Dice roller
function rollDice() {
    const diceNum = document.getElementById("diceNum").value
    const diceResult = document.getElementById("diceResult")
    const diceImages = document.getElementById("diceImages")
    let values= []
    let images =[]

    for (let i = 0; i < diceNum; i++) {
        value = Math.floor(Math.random()*6)+1
        values.push(value);
        images.push(`<img src= "dice_images/${value}.png">`)  
        console.log(values);      
    }
    diceResult.innerHTML =  `Roll: ${values.join(", ")}`
    diceImages.innerHTML = `${images.join("")}`
}


/// Random Password Generator

function randomPasswordGenerator(length, includelowercase,includeuppercase,includenumbers,includespecialcharacters) {
    const  upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const specialCharacters =  '!@#$%^&*()_+=-?'

    let allowedChars = "";
    let password ="";

    allowedChars += includelowercase ? lowerCaseLetters : ""
    allowedChars += includeuppercase ? upperCaseLetters : ""
    allowedChars += includenumbers ? numbers : ""
    allowedChars += includespecialcharacters ? specialCharacters : ""

    if (length <= 0) {
        return("Password length can not be 0");
    }
    if (allowedChars.length === 0) {
        return("At least one requirement should be met");
    }

    for (let i = 0; i < length; i++) {
        const randIndex = Math.floor(Math.random() * allowedChars.length)  
        password += allowedChars[randIndex]      
    }
    return password;
}

const passwordlength = 12;
const includelowercase = true;
const includeuppercase = false;
const includenumbers = true;
const includespecialcharacters = false;

const password = randomPasswordGenerator(
                                        passwordlength, 
                                        includelowercase,
                                        includeuppercase,
                                        includenumbers,
                                        includespecialcharacters)
console.log(password);


document.getElementById("randPassword").innerHTML = `Generated Password is: ${password}`


///callback function = A function passed as an argument to another function.
/// used to handle asynchronous operations: 1. Reading a file, 2. Network Requests, 3. Interacting with DB

function mysum (callback,x,y){
    let result= x + y;
    callback(result);
}

function displayLog(result){
    console.log(result);
}

mysum(displayLog,5,7);

//foreach() method. Method used to iterate over elements of an array and apply specified function(callback) to each element
//arr.forEach(callback)
let arr=[10,20,30];
arr.forEach((value)=>{
   console.log(value*2);
});

arr.forEach(power);
arr.forEach(display)

function power(element, index, array) {
    array[index] = Math.pow(element, 2);
}

function display(element) {
    console.log(element);
}

let fruits = ['apple', 'banana', 'cherry','banana'];

fruits.forEach(capitalize)
fruits.forEach(display);

function Uppercase(element, index, array) {
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}

function display(element) {
    console.log(element);
}


///.map(callback[, thisArg]) = Accepts callback and applies  it on each element of the array. Returns a new Array with the results in the same order as/*

let numbers = [4,9,2];
console.log(numbers.map(Math.sqrt));

function square(element) {
    element = Math.pow(element,2);
    return element;
}

const numberSquare = numbers.map(square)
console.log(numberSquare);

let words=['hello','world','js']

const wordsUppercase = words.map(uppercase)
console.log(wordsUppercase);

function uppercase(element){
   return element.toUpperCase()
}


let dates = ['2024-01-25','2024-02-28','2024-03-31'];

function formatedDates(element) {
    const date = element.split("-")
    return `${date[2]}/${date[1]}/${date[0]}`
}
dates = dates.map(formatedDates)
console.log(dates)


///.filter() method  creates a new array with all elements that pass the test implemented by the provided function.
let  numStr = ["1","2","3","4","5","6"];

function isEven(element) {
    return element % 2 ===0;
}
const evenNums = numStr.filter(isEven);
console.log(evenNums);

let myAge = ['25','8','15','30','50','18','28','33']

function validateAge(element) {
    return element >=18;
}
adultAge = myAge.filter(validateAge)
console.log(adultAge);


///.reduce(callbackfn[, initialValue]) reduces elements of an  array to a single value. The callbackfn is called for each element in the array.
//challenge

let arr5 = [1,2,3,4,5];

function arr5Sum(accumulator, element) {
    return  accumulator + element;
}

let resulSum = arr5.reduce(arr5Sum);
console.log(resulSum.toFixed(2));


let grades = ['70','90','50','60','85','93','78','35']

function maxGrades(accumulator, element) {
    return Math.max(accumulator, element);
}

let resultMaxGrade = grades.reduce(maxGrades);
console.log(resultMaxGrade);


///function expressions
let expressionAdd= function (a , b){return a+b};
console.log(expressionAdd(5,7))

let arr6 = ['2', '7','9', '6','8'];
const squares = arr6.map(function (element) {
    return Math.pow(element, 2);
})
console.log(squares);


///arrow function () => 

const cube = arr6.map((element) => Math.pow(element, 3));
console.log(cube);

const isNumEven = arr6.filter((element) => element % 2 === 0 );
console.log(isNumEven);

const arr6sum = arr6.reduce((accumulator, element)=> accumulator +  parseInt(element), 0);
console.log(arr6sum);


//Promises are used when you want to do something asynchronously and then get the result of that operation once it's done.
