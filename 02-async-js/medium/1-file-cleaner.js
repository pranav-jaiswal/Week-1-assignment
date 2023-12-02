/*
## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/

const fs = require('fs');

function printMessage(err) {
    if(err) {
        console.log("error while writing to the file");
    } else {
        console.log("content written successfully in the file.")
    }
}

function cleanFile(err, fileContent) {
    if(err) {
        console.log('Error in reading the file');
    } else {

        console.log(fileContent);
        let arr = fileContent.split(' ');
        let arrFile = [];
        for(let i=0; i<arr.length; i++) {
            if(arr[i] != '') {
                arrFile.push(arr[i]);
            }
        }
        fileContent = arrFile.join(' ');
        console.log(fileContent);

        fs.writeFile('read.txt', fileContent, 'utf8', printMessage);
    }
}

fs.readFile('read.txt', 'utf8', cleanFile);
