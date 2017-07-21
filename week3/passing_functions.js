// Joshua Reed
// CS 290 Web Development
// Oregon State EECS
// Summer, 2017
//
// functions.js
//
// Description: This file includes three examples of how 
// functions can be passed to other functions to create 
// higher order functions.
//
// Example One: Simply prints elements of an array.
//
// Example Two: Prints the sum of an array using a forEach function.
//
// Example Three: Creates functions to make the following statements:
//
// var Donald = {name: "Donald Duck"};
// Donald.speak = dialog("Donald Duck");
// console.log(Donald.speak("Hello there"));
//
// print Donald Duck says Hello There


// Example One: Printing array.
//
// Passing forEach a function called sumAll is a higher order function.
[1,2,3].forEach(function sumAll(value, idx){    
    console.log("arr[" + idx + "]=" + value);});

// This function of even higher order creates a form that's easier to use.
function printArr(arr){
    arr.forEach(function sumAll(value, idx){    
    console.log("arr[" + idx + "]=" + value);});
    }   


// Example Two: Summing array.
//
// A higher order function is required to store the sum.
function sumArr(arr){
    var sum = 0;
    arr.forEach(function sumAll(value){    
        sum += value
            });
    return sum;
    }

console.log(sumArr([1,2,3]));

// Example Two: Summing array.
//
// A higher order function is required for the contrived example.

function dialog(speaker){
   return function(speech){
        return speaker + ' says ' + speech;
        }; 
    }

var Donald = {name: "Donald Duck"}; // Could be anything.
Donald.speak = dialog("Donald Duck");
console.log(Donald.speak("Hello There"));
