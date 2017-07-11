// Your code here.
function deepEqual(obj1, obj2){
    if (obj1 == null || obj2 == null)
        if (obj1 == null && obj2 == null)
            return true;
        else return false;
    if (typeof(obj1) == typeof(obj2)){
        if (typeof(obj1) === 'object') // Do deep compare...
            for (var item in obj1) {
                if (item not in obj2) return false;
            } 
            return true;
        if (obj1 === obj2)
            return true;
        else
            return false;
        }
    else // Type mismatch
        return false;

}

var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true

console.log(deepEqual(obj, {here: 1, object: 2}));
// → false

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
