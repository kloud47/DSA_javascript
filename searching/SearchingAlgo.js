'use strict';

function binarySearch(arr, key) {
    let s = 0, e = arr.length - 1;
    let mid = Math.floor((s + e)/2);

    while( s <= e ) {
        if(arr[mid] === key) return `present at ${mid}`;
        if(arr[mid] > key) e = mid-1;
        if(arr[mid] < key) s = mid+1;
        mid = Math.floor((s + e)/2);
    }
    return 'Not present';
}

// console.log(binarySearch([2, 5, 6, 9, 13, 15, 23], 25));

///// Using recursion ////////////////////////////////////////////////////////
function BinarySearch(arr, key, s = 0, e = arr.length-1) {
    if(s > e || arr.length === 0) return -1;
    let mid = Math.floor((s+e)/2);

    if(arr[mid] === key) return `present at ${mid}`;

    if(arr[mid] > key) return BinarySearch(arr, key, s, mid-1);
    if(arr[mid] < key) return BinarySearch(arr, key, mid+1, e);
}
// console.log(BinarySearch([2, 5, 6, 9, 13, 15, 23], 15));

///// Naive String search /////////////////////////////////////
let ans = true;
function stringSearch(str, key) {
    for(let i=0; i<str.length; i++) {
        if(str[i] === key[0]) {
            for(let j=1; j<key.length; j++) {
                if(str[i+j] !== key[j]) ans = false;
                else{ ans = true }
            }
            if( ans === true) return true;
        }
    }

    return ans;
}
console.log(stringSearch("lorie loled", "loo"));

function naiveSearch(str, key) {
    let count = 0;
    for(let i=0; i<str.length; i++) {
        for(let j=0; j<key.length; j++) {
            if(key[j] !== str[j+i]) break;
            if(j === key.length - 1) count++;
        }
    }
    return count;
}
console.log(naiveSearch("lorie loled", "lo"))
