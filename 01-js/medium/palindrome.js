/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if (/\s|[^\w\s]/.test(str)) {
    // replace all punctuation marks and spaces with ''
    str=  str.replace(/[^\w\s]/g, '').replace(/\s/g, '');
  }
  str = str.toLowerCase();
  let len = str.length;
  for(let i=0, j=len-1; i<len/2; i++, j--) {
    if(str[i] != str[j]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
