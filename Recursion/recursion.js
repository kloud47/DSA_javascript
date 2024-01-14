'use strict';

/// Print Counting //////////////////////////
// function CountDown(num) {
//     if(num <= 0) {
//         console.log('All is done');
//         return;
//     }
//     console.log(num);
//     num--;
//     CountDown(num);
// }
// CountDown(3);

/// Print SumRange //////////////////////////////
function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num-1);
}
console.log(sumRange(3))

/// Factorial ///////////////////////
function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num-1);
}
console.log(factorial(5))

/////////////////////////////////////////////////////////////////////////////////
                    // Recursion Helper function //
/////////(collect odd values from an array)
function collectOdd(arr) {
    let result = [];
    function helper(arrInput) {
        if(arrInput.length === 0) return;
        if(arrInput[0] % 2 !== 0) result.push(arrInput[0]);
        helper(arrInput.slice(1));
    }
    helper(arr);

    return result;
}
const arr = collectOdd([1, 2, 3, 4, 5, 6, 7 , 8, 9]);
console.log(arr);

//////// using Pure Recursion of same problem /////////////
// function collectOddNum(arr) {
//     let
// }
