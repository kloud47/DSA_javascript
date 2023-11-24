'use strict';

let startTime = performance.now();
//// pivot helper //////////////////////
function pivot(arr, start=0, end=arr.length-1) {
    const pivot = arr[start];
    let swapIndex = start;
    for(let i=start+1; i<arr.length; i++) {
        if(pivot > arr[i]) {
            swapIndex++;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];// Swapping
        }
    }
    [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];

    return swapIndex;
};
// console.log(pivot([4,8,2,1,5,7,6,3]));

function QuickSort(arr, s=0, e=arr.length-1) {
    if( s>=e ) return;

    let pivotIndex = pivot(arr, s, e);
    // Left Sort
    QuickSort(arr, s, pivotIndex-1);
    // Right Sort
    QuickSort(arr, pivotIndex+1, e);

    return arr;
};

console.log(QuickSort([4, 6, 9, 1 , 2, 5, 3]));
// console.log(QuickSort([1, 2, 3, 4, 5, 6, 7])); // WOrst case TC- O(n^2):

let endTime = performance.now();
console.log(endTime - startTime);