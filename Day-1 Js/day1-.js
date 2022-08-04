//Question1:What is meant by first class functions?
//A function can be passed as argument/values into another function or can be returned from the function.
//This dual property of the functions make them call as first class function.
//They are aslo called as "first class citizens".

var callHello = function heyHello(a){
    console.log("Hi sairam!!");
    a();
}

callHello(function Hi()
{console.log("hey there Sairam!!");});

//Question2:Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()?

//call():In case of call each and every arguments which is required to be passed to the function will be passed individually.

let user = {
    name : "Sairam",
    age : 24,
    salary : 50000,
    city : "Andhra pradesh"
}
let user2 = {
    name : "jassi",
    age : 21,
    salary : 60000,
    city : "hyderabad"
}
// creating a function which will be using this object
// When using call bind or apply
function UserDetails (company, designation) {
    // console.log("Hello inside function", this);
     console.log(this.name + " is " + this.age + " years old. ", company, " ", designation);
}
UserDetails.call(user2, "Google", "Backend Developer");

//Apply : In case of apply each and every argument which is required to be passed to the function will be passed inside an array .

UserDetails.apply(user2, ["Amazon", " Full Stack Developer"]);

// Bind: In case of bind, it will return you a new function. And this new function you can use anytime anywhere.

const newFunction = UserDetails.bind(user);
newFunction("Flipkart", "Data Scientist");


//Question3:What are objects in javascript?

//Objects are collection of method and properties.
//The order and entry of properties and methods aren't preserved in  objects.
//Objects converts the keys data types into strings even if it isn't string type.
//Basically all keys are of string type only by default.
//Methods to create objects.
//Method1:Normal method

const myMobile = {
    brand:"iQOO3",
    color:"black",
    weight:175,
}

console.log(myMobile);

//Method2//Using constructor function
function Students (name,age,gender){
    this.name = name;
    this.age = age;
    this.gender  = gender;
}
const students1 = new Students('sairam',24,'male');
console.log(students1);

//Question4:What are function constructors?
//In JavaScript, a constructor function is used to create multiple objects at a time.
//new keyword is mandotary to used for function constructor.
//E.g
function Person () {
    this.name = 'rambo',
    this.age = 23
}

// create an object
const person = new Person();
console.log(person);

//Question5:Explain prototypes.
//Prototype property is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties.

//E.g
function PersonOne(name, job, yearOfBirth){   
    this.name= name;
    this.job= job;
    this.yearOfBirth= yearOfBirth;
}
console.log(PersonOne.prototype);

//Question6:What is prototype chain?
//Prototypes are the means of inheritance in JavaScript. 
//The prototype of an object would also have a prototype object. 
//This continues until we reach the top level when there is no prototype object.This is called prototype chaining.

let myObject = {
    name : "Gtv",
    gender : "Male",
    age : 24,
    showInfo : function(){
        console.log(`Name of the person is ${this.name}`);
    }
}

let secondObj = {
    name : "rambo",
}

secondObj.__proto__ = myObject;
console.log(secondObj.name,secondObj.gender,secondObj.age);
console.log(secondObj.__proto__.__proto__.__proto__);//Null

//Question7:Give an example of inheritance using function constructor?

function PersonTwo(name, job, yearOfBirth){   
    this.name= name;
    this.job= job;
    this.yearOfBirth= yearOfBirth;
}

function PersonThree(name){
    this.name = name;
}
const personNew = new PersonTwo('vineeth','IT',1998)
const personNew1 = new PersonThree('jassi');
console.log(personNew);
personNew.__proto__ = personNew1;


//Question8:What are callbacks?
//CallBack function :function which are passes as an argument to another function.
//These are those kind of functions which are called  back after certain period or are passed as a values which can be called back as and when required.

setTimeout(() =>{
    console.log("Hi Dev!!");//hi Dev will print after 3secs in every call.

},3000);

//Question9:What is the use of setTimeout?
//The setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.


//Question10:What is an event loop and call stack?

//An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.

//Call stack:
//call stack to manage execution contexts: the Global Execution Context and Function Execution Contexts.
//The call stack works based on the LIFO principle i.e., last-in-first-out.
//When you execute a script, the JavaScript engine creates a Global Execution Context and pushes it on top of the call stack.
//Whenever a function is called, the JavaScript engine creates a function execution context for the function, pushes it on top of the call stack, and starts executing the function.
//If a function calls another function, the JavaScript engine creates a new function execution context for the function that is being called and pushes it on top of the call stack.
//When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off.
//The script will stop when the call stack is empty.