'use strict';

console.log(['ok', "hello", 'namaste', 'bye', 'apple'].sort());
console.log([6, 4, 15, 10].sort());
//// Sorting numbers using javascript built-in
console.log([6, 14, 16, 0].sort(function(num1, num2) {
    return num1 - num2;
}));

/// Sort elements by length of elements:
function compareByLength(str1, str2) {
    return str1.length - str2.length;
};
console.log(['Steele', 'Colt', 'Data Structures', 'Algorithm'].sort(compareByLength));

                                                                    //
////// Sorting Algorithm (Bubble sort)/////////////////////////////
const arr = [5, 3, 1, 4, 2];
function B_sort(arr) {
    let noSwap;
    for(let i=0; i<arr.length; i++) {
        noSwap = true;
        for(let j=0; j<arr.length; j++) {
            // console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]) {
                // Swaping:
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // Ascending
                noSwap = false;
            }
        }
        if( noSwap ) break;
        // console.log("ONE complete Pass");
    }
    return arr;
};
console.log(B_sort(arr));

                                                                    //
////// Sorting Algorithm (Selection sort)/////////////////////////////
const arrr = [5, 3, 1, 4, 2];
function S_sort(arr) {
    for(let i=0; i<arr.length; i++) {
        let mini = i;
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[mini]) mini = j;
        }
        [arr[i], arr[mini]] = [arr[mini], arr[i]];// swapping:
    }
    return arr;
};
console.log(S_sort(arrr));

                                                                    //
////// Sorting Algorithm (Insertion sort)/////////////////////////////
const array = [5, 3, 1, 4, 2];
function I_sort(arr) {
    for(let i=0; i<arr.length; i++) { 
        let currentVal = arr[i];
        for(var j=i-1; j>=0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal; 
    }
    return arr;
};
console.log(I_sort(array));

//// Creating array of random data //////////////////////
const len = 10;
const data = Array.apply(null, {length: len}).map(Function.call, function() {
     return Math.trunc(Math.random() * len) + 1
})
console.log(data);