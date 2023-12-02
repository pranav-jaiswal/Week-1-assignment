/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds*1000);
    })
}

console.log(new Date());

sleep(20).then(function() {
    console.log(new Date());
});