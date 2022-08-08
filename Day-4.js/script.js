// Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button
var button = document.querySelector('#Add');
button.addEventListener('click', function(){
    let h1 = document.createElement('h1');
    document.body.appendChild(h1);
    
    h1.innerText = "MERN stack";
    console.log(h1);
});
//Write code to get 1st H1 element from a webpage using DOM
document.getElementsByTagName('h1')[0];
document.querySelectorAll('#h1')[0];
document.querySelector('#h1');

// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
function Datetime(){
    const dateTime = new Date();
    let hour = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.querySelector('.session');

    if (hour >= 12){
      session.innerHTML = "PM"
    }
    else{
        session.innerHTML = "AM"
    }

    if(hour > 12){
        hour= hour-12;
    }

    if((hour +"").length ==1){
        hour = "0" + hour;
    }
    if((min +"").length ==1){
        min = "0" + min;
    }
    if((sec +"").length ==1){
        sec = "0" + sec;
    }
    document.querySelector('.hour').innerHTML = hour + "<br>hours";
    document.querySelector('.min').innerHTML = min + "<br>hours";
    document.querySelector('.sec').innerHTML = sec + "<br>hours";

}
setInterval(Datetime,1000);

//Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

document.querySelector('#changeText').addEventListener('click', function(){
    document.querySelector('.h1Text').innerHTML = "Welcome to Elevation academy";
})

//Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

document.querySelector('#hideText').addEventListener('click', function(){
    document.querySelector('.h1Text').innerHTML = "";
})
//Given an array of 0's and 1's find out number of 0's

let arr1 = [ 1,0,1,0,0,1,1,0,0,1]
let arr2 = arr1.filter( x => x == 0);
console.log(arr2.length);

//Given an array find out total no. of odd and even nos.
let array = [2,5,30,23,14,15,18,26,13];
let array2 = array.filter((x) => x % 2 ===0);
console.log("total no of even nmbers in array:", array.length);
console.log("total no of odd nmbers in array:", array.length - array2.length);


//Given a string find out number of vowels 
let str = "jhsdgwjhdbfcaeriuoatroeakbndqwbdnmndkjqw";
function Countvowel(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  console.log(count);
}
Countvowel(str);
//Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same
let object1 ={ 
  fName: "Sairam", 
  hobbies: ["music", "coding", "games"], 
}; 
let object2 = { 
    fName: "Gtv",
    hobbies: ["coding", "playing", "music"], 
}; 

function checkObj(object1, object2){ 
    let count = 0;
       for (let i = 0; i <object1.hobbies.length; i++) {  
           if (object1.hobbies.includes(object2.hobbies[i]))
         {
        count++;
    }
     else {    
       console.log("hobbies are not same");   
      } 
      } 
        if (count == object1.hobbies.length)  {
      console.log("All the elements are same");
       } 
    } 
    checkObj(object1, object2);
