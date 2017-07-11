// Joshua Reed
// CS 290 Web Development
// Oregon State EECS
//
// This file shows how functions can be hoisted in JavaScript.


console.log("Calling printHello() from variable to demonstrate lack of hoisting.");
try{
    funcVar();
    }
catch(err){
    console.log("Error caught... Failed to print hello.");
    }

console.log("\nCalling printHello() directly to demonstrate hoisting.");
try{
    printHello();
    }
catch(err){
    console.log("Error caught... Failed to print hello.");
    }


// Definition of the function printHello and var funcVar
var funcVar = function printHello(){
    console.log("Hello");
    }
function printHello(){
    console.log("Hello");
    }

console.log("\nCalling printHello() from variable again to demonstrate that it works.");
try{
    funcVar();
    }
catch(err){
    console.log("Error caught... Failed to print hello.");
    }
