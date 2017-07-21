// Joshua Reed
// CS 290 Web Development
// Oregon State EECS
// Summer, 2017
//
// closure_example.js
//
// Description: This example creates a list of anonymous functions that print
// what the item is. 
//
// The point is to play with closures. As can be seen in buildList, a wrapper
// was needed to create a closure for the inner function.

function buildList(list){
    var result = [];
    for (var i = 0; i < list.length; i++){
        var item = 'item' + list[i];

        // Here outer wraps inner to create a closure for variables 
        // item and i.
        result.push(function outer(item, j){ 
            return function inner(){
                console.log(item + ' ' + list[j]);
                };
            }(item, i));
        }
    return result;
    }
 
function testList(){
    var fnlist = buildList([1,2,3]);
    for (var j = 0; j < fnlist.length; j++){
        fnlist[j]();
        }
    }

testList();
