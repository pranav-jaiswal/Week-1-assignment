// Write to a file
/*
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs = require('fs');

const contentToWrite = 'Hello, this is the content to write to the file.';

// Specify the file path
const filePath = 'example.txt';

function print(err) {
    if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('File has been written successfully.');
      }
}

// Write to the file
fs.writeFile(filePath, contentToWrite, 'utf8', print);