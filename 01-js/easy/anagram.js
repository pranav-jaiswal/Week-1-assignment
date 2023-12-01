/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/


/*
To simplify str1.split('').sort().join('')
let arr1 = str1.split('');   this gives char array, js sort() is available on char arr
let sort1 = arr1.sort();
str1 = sort1.join('');     this is again give us the sorted string and now we can compare
*/

function isAnagram(str1, str2) {

  if(str1.split('').sort().join('') == str2.split('').sort().join('')) {
    return true;
  }

  return false;

}

console.log(isAnagram('train', 'raint'));

module.exports = isAnagram;
