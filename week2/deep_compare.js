// Joshua Reed
// CS 290 Web Development
// Oregon State EECS
//
// This file compares two JSON objects.
//
// I happened upon a great answer, and while I didn't copy the code, I did take
// the key sorting idea from here:
// https://stackoverflow.com/questions/13142968/deep-comparison-of-objects-arrays 

function deepEqual(item1, item2){

    // Check whether both items are objects but not null.
    // If not, then just return the direct comparison of the two.
    if ((typeof(item1) == "object" && typeof(item2) == "object") && (item2 != null && item1 != null)){
        // Check that these have the same number of keys
        var keys1 = Object.keys(item1);
        var keys2 = Object.keys(item2);
        if (keys1.length != keys2.length) return false;

        // Check that the keys match, and that their content matches.
        // Do this recursively all the way down. 
        for (var key in item1){
            if (!(key in item2) || !deepEqual(item1[key], item2[key])) return false;
            }
        return true;
        }
    else return (item1 === item2); // Directly compare base elements.
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true

console.log(deepEqual(obj, {here: 1, object: 2}));
// → false

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
