console.log("hello world!!");

// Q1.What is a Temporal Dead Zone?
//The let and const variables are not accessible before they are initialized with some value, and the phase between the starting of the execution of block in which the let or const variable is declared till that variable is being initialized is called Temporal Dead Zone 

//Q2.What is the for-in loop in JavaScript? Give its syntax

// let obj = {
//   name: "Gtv",
//   lastName: "Sairam",
//   age: 24,
// };
// let array = ["Vineeth", "Akhil", "Akash"];

// for (let j in array) {
//   console.log(j);
// }


// Q3.Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript

// Local scope: Variables declared inside a function become local to the function. Local variables are created when
// a function starts and deleted when the function is executed. Local variables have Function Scope which means that they
//  can only be accessed from within the function.

// function Localscope() {
//     var x = '1';
//     console.log('inside function: ', x);
// }

// Localscope();          // Inside function: 1
// console.log(x); // Reference Error: x is not defined

// Block scope: Earlier JavaScript had only Global Scope and Function Scope.let and const are the two new important
//  keywords that were introduced by the ES6 and these two keywords provide Block Scope in JavaScript.ECMAScript(ES6)
// 2015 was the second major revision to JavaScript.Variables that are declared inside a { } block cannot be accessed
// from outside the block.

// {
//     let x = 2;
//    }
//    x cannot be used here

// Function scope: JavaScript has function scope and each function creates a new scope. Variables defined inside
// a function are not accessible from outside the function and variables declared with var, let and const are quite
// similar when declared inside a function.

// function myFunction() {
//     let firstName = "Krishna";   // Function Scope
//   }



// Global scope: Variables declared Globally (outside of any function) have Global Scope and Global variables can be
//  accessed from anywhere in a program. Similar to function scope variables declared with var, let and const are
// quite similar when declared outside a block.

// Global scope
// var x = '1'
// const y = '2'
// let z = '3'

// console.log(x);    // 1
// console.log(y);    // 2
// console.log(z);    // 3

// function getNo() {
//     console.log(x);   // x is accessible here
//     console.log(y);   // y is accessible here
//     console.log(z);   // z is accessible here
// }
// getNo();


// Q4.What is difference between null and undefined and where to use what?

// In JavaScript, undefined means a variable has been declared but has not yet been assigned a value
// null is an assignment value. It can be assigned to a variable as a representation of no value:


//Q5.what is Symbol?

// Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a
// Symbol — that's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't
// collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will
//  typically use to access the object.

// const sym1 = Symbol();
// const sym2 = Symbol('hello');
// const sym3 = Symbol('hi');


// Q6. Write code to explain map and filter in arrays

// let arr = [1, 4, 6, , 9, 16, 26];

// let arr1 = arr.map((x) => x * 2);
// console.log(arr1);

// let arr2 = arr.map((x) => x < 10);
// console.log(arr2);


// Q7. Explain passed by value and passed by reference
// primitive ---> Passed by value ,they made the copy of the original and assigned to the other variable  the arguments can  Primitive data types such as string, number, null, undefined, boolean, are passed by value 
// Non-primitive ---> Passed by reference , they are big data type so we can't made the copies of big data type so they are assigned to a address and that address is given to the other variable while non-primitive data types such as objects, arrays, and functions are passed by reference in Javascript.


// let a = 10;
// let b = a;
// b += 5;
// console.log(a); //10
// console.log(b); //15

// let obj = {
//   name: "Sairam",
//   age: 24,
//   hobbies: ["music", "coding"],
// };
// console.log("obj :", obj);

// let obj2 = obj;
// obj2.name = "Gtv";
// console.log("obj2", obj2);
// console.log("obj :", obj);

// let arr = [1, 2, 3, 4, 5];

// console.log("arr : ", arr);
// let arr1 = arr;
// arr1[1] = "Gtv";
// console.log("arr1 : ", arr1);
// console.log("arr : ", arr);

// var obj = {}; //------
// var obj1 = {};
// obj1 = obj;
// console.log(obj == obj1);


// Q8.Please explain Self Invoking Function and its code
// In JavaScript, a “Self-Invoking” function is a type of function that is invoked or called automatically after
// its definition. The execution of such an anonymous function is done by enclosing it in a parenthesis set followed by another set of parenthesis.
// Syntx :

// (function () {
//   console.log("Self Invoking function");
// })();