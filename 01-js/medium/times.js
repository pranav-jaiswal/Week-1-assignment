/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function sum(n1, n2) {
    let sum = 0;
    for(let i=n1; i<n2; i++) {
        sum += i;
    }
    return sum;
}

function calculateTime(n) {
    const t1 = new Date();
    sum(1, n);
    const t2 = new Date();
    return (t2-t1)/1000;
    
}

console.log(calculateTime(100));
console.log(calculateTime(100000));
console.log(calculateTime(1000000000));