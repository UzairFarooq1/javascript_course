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


// document.getElementById("randPassword").innerHTML = `Generated Password is: ${password}`


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


// object  literal
///this reference to the object where THIS  keyword was used
///constructors  are special methods of creating objects in javascript




let person2 ={
    firstName: "John",
    lastName : "Doe",
    age :43,
    email:"john@doe.com",
    showInfo : function(){
        console.log(`${this.firstName} ${this.lastName}, Age: ${this.age}`);
    },
    changeEmail : function() {
       this.email="newmail@gmail.com";
    }
    
};
person2.showInfo();
person2.changeEmail();
console.log(person2.email);


let person1 ={
    name: 'Juan',
    age:40,
    country:'Argentina',
    greetings : () => {console.log(`${this.name} I am Juan`)}
}

let anotherPerson={
    name :'María',
    age:30,
    hobbies:{
        music:true,
        painting:false,
        swimming: true
    }
}

console.log(`${person1.name} is ${person1.age} years old from ${person1.country}`);
console.log(person1.greetings());

//Constructor
function car(name,model_year,mileage,color) {
    this.name = name;
    this.model_year = model_year;
    this.mileage = mileage;
    this.color = color
    this.drive = () => {console.log(`You drive ${this.name} car which is a ${this.model_year} model`);}
}

const car1 = new car('RVR',2010,104000,'Grey')
const car2= new car('Aventador S','2019', 50000,'Red')

console.log(car1);
car1.drive()
console.log(car2);
car2.drive()



//Classes provides a  more elegant way to create objects in JavaScript and also allows us to use inheritance
class PersonaClass{
    constructor (name, age, country, salary){
        this.name = name;
        this.age = age;
        this.country = country;
        this.salary = salary;
    }
    
    greetings(){
        return `Hello! My name is ${this.name}, I am ${this.age} years old and I come from ${this.country}.`;
    }
    income(vat){
        return this.salary - (this.salary *   vat / 100);
    }
    }

    const vat = 16;
    const  person3 = new PersonaClass("Juan", 30, "Spain",  6000);
    console.log(person3.greetings());
    console.log(`My net salary is $${person3.income(vat).toFixed(2)}`)

    //static keyword  can be used with methods or properties of a class but not with constructors. A static method belongs to the class itself
    /*Exercise: Create a class for a book with properties title, author, year of publication and price. Include methods to display the number of books created*/

    class book {

        static bookCount = 0
        constructor(title, author, year, price) {
            this.title = title;
            this.author = author;
            this.year = year;
            this.price = price;
            book.bookCount++ ;
        }

        
        displayBookInfo() {
            return `${this.title} was written by ${this.author} in the year ${this.year}`;
          }
          
          compareTo(otherBook) {
            if (this.price < otherBook.price) {
              return "cheaper";
            } else if (this.price > otherBook.price) {
              return "Expensive";
            } else {
              return 0;
            }
          }
    }
    let bookA = new book ("The Catcher in the Rye","J.D. Salinger",1951,14.99);
    let bookB = new book ("Harry Potter and the Philosopher's Stone","Margaret Atwood",1997,29.99);
    console.log(bookA.displayBookInfo())
    console.log(bookB.displayBookInfo())
    console.log(bookA.compareTo(bookB));
    console.log(book.bookCount);
    class  Employee extends PersonaClass{
        constructor(name, age, country, salary, position) {
            super(name, age, country, salary);
            this.position = position;
        }
        workHours() {
            if (this.position === 'Manager') {
                return 'I usually work between 8:00 AM and 4:30 PM';
            } else {
               return 'I usually work between 9:00 AM and 5:00 PM'
            }
          }
          drive () {
              return `${super.greetings()} Also, I can drive.`;
          }
      }
      
      const employee1 = new Employee('Ana', 28, 'USA', 7500, 'Analyst');
      console.log(employee1.drive())
      console.log(employee1.workHours())

    //setters and getters 
    class Car {
        constructor(make, model, year){
            this._make= make;
            this._model= model;
            this._year= year;
        }
    
        set make(newMake) {
           this._make = newMake;
        }
        
        get make() {
           return `This car is a ${this._make}`;
        }
    }

    let myCar = new Car("Ford", "Mustang", 2005);
    console.log(myCar.make);
    myCar.make = "Toyota";
    console.log(myCar.make);
    //set can also be used to check  the input data type before assigning it to the variable
    //getter makes a property readable while  setter allows you to control how/when the value of a property is assigned/Making it writable


    //destructuring 
    const person5={firstName:"John", lastName:"Doe", age:50};
    const {firstName,lastName} =person5;
    console.log(`${firstName} ${lastName}`)

    //nested objects
    const person6={
        firstName:'Jane',
        lastName:'Smith',
        age:45,
        address:{
            streetAddress:'123 Main St',
            city:'New York',
            state:'NY'
        },
        hobbies:[ 'Reading','Writing','Coding']
    };

    console.log(`${person6.firstName} lives at ${person6.address.streetAddress}, ${person6.address.city}, ${person6.address.state}`)


    class Person{
        constructor (name, age, country, salary, ...address){
            this.name = name;
            this.age = age;
            this.country = country;
            this.salary = salary;
            this.address = new Address(...address)
        }
    }
    class  Address{
        constructor(streetAddress,city,state){
            this.streetAddress=streetAddress;
            this.city=city;
            this.state=state;
            }
    }

    const  john = new Person('John Doe', 30, 'USA', 70000, '123 Oak Drive', 'New York', 'NY');
    console.log (`Employee Name: ${john.name}, Age: ${john.age}, Country: ${john.country}, Salary: ${john.salary}, Address: ${john.address}`)
    console.log(john.address);


    //Array of Objects 
    const people=[
        {name:"Alice",age:21},
        {name:"Bob",age:35},
        {name:"Charlie",age:18}
      ];
      
      for(let key in people){
          let person=people[key];
          console.log(`${person.name} is ${person.age}`);
      }
      //foreach
      people.forEach(person => {
        console.log(person.name);
      })
      //.map
      const names = people.map(person => person.name)
      console.log(names);
      //.filter
      const olderThan18 = people.filter(person=>person.age>18)
      console.log(olderThan18);
      //.reduce
      const sumOfAge = people.reduce((total,nextPerson)=>{return total+nextPerson.age},0)
      console.log(sumOfAge);
      
      const maxAge = people.reduce( (maxSoFar, nextPerson) => 
      nextPerson.age > maxSoFar.age ?                      
      nextPerson: maxSoFar );
      console.log(maxAge);


      //.sort () method can be used on arrays to sort the elements. It takes a compare function as an argument that define
      //.sort(a,b => b - a) or .sort((a, b) => a - b)
      const sortByName = () => people.sort((a, b) => a.name.localeCompare(b.name));
      sortByName();
      const sortByAge = () => people.sort((a,b) => a.age-b.age)
      sortByAge()
      console.log(people);

      //fish-yates algorithm (shuffling objects in array)
      function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        
        while (0 !== currentIndex) {
    
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    function newShuffle(array) {
        for (let i = array.length - 1 ; i > 0; i--) {
            const random = Math.floor(Math.random ()*(i + 1));
            [array[i],array[random]] = [array[random],array[i]]
        }
    }
    let newPeople=JSON.parse(JSON.stringify(people))
    shuffle(newPeople)
    console.log("Shuffled People",newPeople)
    newShuffle(newPeople)
    console.log("New Shuffled People",newPeople)


    //Date object
    let date1 = new Date('2023/12/31');
    let date2 = new Date('2024/01/01')
    if (date2>date1) {
        console.log("Happy New Year");
    }
    console.log(`Day of the Week: ${date1.getDay()}`)
    console.log(`Month: ${date1.getMonth()}`)
    console.log(`Year: ${date1.getFullYear()}`)
    console.log(`Hours: ${date1.getHours()}`)
    console.log(`Minutes: ${date1.getMinutes()}`)
    console.log(`Seconds: ${date1.getSeconds()}`)


    //closure 
    function outerFunction(){
        let counter=0
        function innerFunction(){
            counter++
            return `Outer Function Value :${counter}`
        }
        return innerFunction
    }
    let myFunc=outerFunction()
    console.log(myFunc())
    console.log(myFunc())
    console.log(myFunc());

    function game() {
        let score=0;

        function increaseScore(points) {
            score+=points
            console.log(`current score is ${score}`);
        }
        
        function decreaseScore(points) {
            score-=points
            console.log(`Current Score is ${score}`);
        }

        function getScore() {
            console.log(`The current Score is ${score}`);
        }

        return {increaseScore, decreaseScore, getScore}
    }

    let myGame = game()

    console.log(myGame.increaseScore(5));
    console.log(myGame.increaseScore(10));
    console.log(myGame.increaseScore(15));
    console.log(myGame.decreaseScore(5));
    console.log(myGame.decreaseScore(5));

    console.log(myGame.getScore());

    //setTimeout function 
    const timer1 = setTimeout(()=>{console.log("Hello from Timeout")},2000)
    clearTimeout(timer1)



    //Digital Clock 
    //let time = document.getElementById('clock')
    let timeNow = new Date()
    timeNow.getHours();
    timeNow.getMinutes();
    timeNow.getSeconds();
    
    function showTime(){
        let now = new Date()
        let hours = now.getHours().toString().padStart(2,0)
        let minutes = now.getMinutes().toString().padStart(2,0)
        let seconds = now.getSeconds().toString().padStart(2,0)

    //     if (hours < 10){
    //         hours = "0" + hours;
    //     }
        
    //     if(minutes <  10){
    //        minutes = "0"+ minutes;
    //    }  
    //     else{
    //        minutes = minutes;
    //    }
    //     if(seconds <  10){
    //         seconds = "0"+ seconds;
    //     }  
    //     else{
    //         seconds = seconds;
    //     }

        let timeOfDay = 'AM';

        if(hours >= 12){
            timeOfDay = 'PM'
            hours = hours - 12
        }
        if(hours == 0) {
            hours = 12
            timeOfDay= 'AM'
        }
     
       //time.innerHTML = `${hours}:${minutes}:${seconds} ${timeOfDay}`;
       setTimeout(showTime, 1000);
    }
    showTime();

    //StopWatch
    let timer = document.getElementById('timer');
    let startBtn = document.getElementById('startBtn')
    let stopBtn = document.getElementById('stopBtn')
    let resetBtn = document.getElementById('resetBtn')
    let isRunning = false; 
    let tInterval;
    let totalSeconds = 0 ;
    let hours;
    let minutes;
    let milisec = 0;

    function startTimer(){
        isRunning = true;
        tInterval = setInterval(() => {
           milisec++  
           hours = Math.floor(milisec/(3600*60));
           minutes = Math.floor(milisec/3600 )
           minutes = minutes % 60;
           seconds = Math.floor(milisec / 60 )
           seconds = seconds % 60;
           miliseconds = milisec % 60;
           hours = hours < 10 ?  "0" + hours : hours;
           minutes = minutes < 10 ? "0"+ minutes : minutes;
           seconds = seconds < 10 ? "0" + seconds: seconds;
           timer.textContent = `${hours}:${minutes}:${seconds}:${Math.floor(miliseconds)}`;
        },10)
        startBtn.disabled = true
        stopBtn.disabled = false
        resetBtn.disabled = false
    }

    function stopTimer() {
        isRunning = false
        clearInterval(tInterval)
        startBtn.disabled = false
        stopBtn.disabled = true
    }
    
    function resetTimer() {
        milisec = 0
        timer.textContent = "00:00:00:00"
        stopTimer()
        startBtn.disabled = false
    }



    //asynchronous functions: 

    async function showTimeUntilDate() {
       const targetDate = new Date("April 30, 2024");
       let currentDate = new Date();
       let timeDiff = targetDate.getTime() - currentDate.getTime();
       if (timeDiff <= 0) {
          alert('The countdown has finished!')
       } else {
         await displayCountDown(timeDiff);
       }
   }

   function displayCountDown(time){
      let days, hours, minutes, seconds ;
      [days, hours, minutes, seconds] = convertToHMS(time);
      document.getElementById("countdowndays").textContent=days;
      document.getElementById("countdownhours").textContent=addZero(hours);
      document.getElementById("countdownminutes").textContent=addZero(minutes);
      document.getElementById("countdownseconds").textContent=addZero(Math.floor(seconds));
      setTimeout(() => {showTimeUntilDate()}, 10)
   }

   function addZero(n) {
      return ("00" + n).slice(-2);
   }

   function convertToHMS(ms) {  
      days = Math.floor(ms / (3600 * 24));
      ms %= 3600 * 24;  
      hours = Math.floor(ms / 3600);
      min_sec = ms % 3600;
      minutes = Math.floor(min_sec / 60);
      seconds = Math.floor(min_sec % 60);
      return [days, hours, minutes, seconds];
   }



        












//Promises are used when you want to do something asynchronously and then get the result of that operation once it's done

