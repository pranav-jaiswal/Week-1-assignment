/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function getAfterNSec(n) {
    return new Promise(function(resolve) {
        setTimeout(resolve, n*1000);
    });
}


function wait() {
    console.log(`after ${n} seconds`);
}

let n=10;

/* This works

getAfterNSec(n).then(function(){
    console.log(`${n} seconds passed`);
    wait(n);
});

*/

getAfterNSec(n).then(wait);

/* getAfterNSec(n).then(wait(n));
If we give argumnents in then method like .then(wait(n)) 
wait is called even before promise is returned.
*/
