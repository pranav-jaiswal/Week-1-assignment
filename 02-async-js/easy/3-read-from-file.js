// Reading the contents of a file

/*
Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 
*/

const fs = require('fs');

function summation(number) {
    let sum = 0;
    for(let i = 1; i<= number; i++) {
        sum += i;
    }
    console.log(sum);
}


function fileIsRead(err, fileContent) {
    if(err) {
        console.log("We have encountered some error");
    } else {
        console.log(fileContent);
    }
}

fs.readFile('number.txt', 'utf8', fileIsRead);

summation(100);
summation(100);
summation(100);
summation(100);
summation(100);
summation(100);
summation(100);
summation(100);
summation(100);
summation(100);
summation(100000000);

