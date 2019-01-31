/*Q 11 Write a JavaScript function that returns a passed string    with letters in alphabetical order?
  Example string : 'webmaster'
  Expected Output : 'abeemrstw'
*/

function alphabetOrder(str){

  //.split('')the string is split between each character.
  //.sort() method sorts an array alphabetically:
  //.join() method joins the elements of an array into a string, and returns the string.
  return str.split('').sort().join('');
}
console.log(alphabetOrder("webmaster"));