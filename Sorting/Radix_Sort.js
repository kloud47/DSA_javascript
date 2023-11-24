'use strict';

function GetDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};
function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// function mostsDigit(arr) {
//     let maxDigits = 0;
//     for(let i=0; i<arr.length; i++) {
//         maxDigits = Math.ma(maxDigits, digitCount(arr[i]));
//     }
//     return maxDigits;
// }
function MostDigits(arr) {
    return digitCount(Math.max(...arr));
};

function RadixSort(arr) {
    let maxDigitCount = MostDigits(arr);
    for(let i=0; i<maxDigitCount; i++) {
        let digitBucket = Array.from({length: 10}, () => []);
        for(let j=0; j<arr.length; j++) {
            digitBucket[GetDigit(arr[j], i)].push(arr[j]);
        }
        arr = [].concat(...digitBucket);
    }
    return arr;
};

console.log(RadixSort([23, 345, 5467, 12, 2345, 9852]));