/// Frequency counter pattern (O-n^2  Approach )/////////////////////////////////
arr1 = [1, 3, 1, 3];
arr2 = [1, 9, 1, 9];

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    };

    for(let i=0; i<arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i]**2);
        if(correctIndex == -1) return false;
        arr2.splice(correctIndex, 1);
    }
    return true;
}

// console.log(same(arr1, arr2));

////// (O-n Approach) ///////////////////////////////////////////////////////////////////////////////
function same2(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1) {
        // empty(default) frequencyCounter1[val] = NaN => to convert NaN to 0
        // use NaN || 0
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for(let key in frequencyCounter1) {
        if(!(key**2 in frequencyCounter2)) return false;

        if(frequencyCounter2[key**2] !== frequencyCounter1[key]) {
            // easy to access data inside of object rather than use indexof() method
            return false;
        }
    }
    
    return true;
};

console.log(same2(arr1, arr2), ' => frequency counter');

///// (Valid anagram) (Approach - 1)////////////////////////////////////////////////////////////////////////////////////
function validAnagram(str1, str2) {
    let countObj1 = {};
    let countObj2 = {};
    for(let i of str1) {
        countObj1[i] = (countObj1[i] || 0) + 1;
    }
    for(let i of str2) {
        countObj2[i] = (countObj2[i] || 0) + 1;
    }
    console.log(countObj1, countObj2);

    for(let key in countObj1) {
        if(!(countObj2[key])) return false;
        if(countObj1[key] !== countObj2[key]) return false;
    }
    return true;
}
console.log(validAnagram('aanagr', 'aagran'), ' => valid anagram');

/// (Approach - 2) ///////////////////////////////////////////////////////////////////////
function validAnagram2(str1, str2) {
    if(str1.length != str2.length) return false;

    let lookup = {};
    for(let i=0; i<str1.length; i++) {
        let letter = str1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i=0; i<str2.length; i++) {
        let letter = str2[i];
        if(!lookup[letter]) return false;
        else {
            lookup[letter] -= 1;
        }
    }
    return true;
};
console.log(validAnagram2('ammag', 'amamg'));

///// Multiple Array pointers ////////////////////////////////////////////
//// (using pointers at diff. position to calculate sum fast)
const arr = [-3, -2, -1, 0, 2, 3, 4];

function sumZero(arr) {
    let left = 0, right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) return [arr[left], arr[right]];
        (sum > 0) ? right-- : left++;
        // changing pointers position acc. to value of sum
        // else if(sum > 0) right--;
        // else left++;
    }
}
console.log(sumZero(arr));// time complexity (O-n)

//// Counting unique values ////////////////////////////////////////////////////////
const values = [1, 1, 1, 2, 3, 3, 4, 4, 5, 6];

function uniqueValues(arr) {
    let i = 0;
    let j = 1;
    while(j < arr.length) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
        j++;
    }
    return i+1;
};
console.log(uniqueValues(values));