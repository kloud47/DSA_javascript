'use strict';

/// Merge Two Sorted arrays ////////////////
function Merge(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;
    while(i<arr1.length && j<arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]); i++;
        } else {
            result.push(arr2[j]); j++;
        }
    }
    while(i < arr1.length) {
        result.push(arr1[i]); i++;
    }
    while(j < arr2.length) {
        result.push(arr2[j]); j++;
    }

    return result;
};

///// Implementing Merge Sort ////////////////////////////////////////
function MergeSort(arr) {
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length/2);
    let left = MergeSort(arr.slice(0, mid));
    let right = MergeSort(arr.slice(mid));
    
    return Merge(left, right);
};

console.log(MergeSort([10, 24, 76, 73])); 