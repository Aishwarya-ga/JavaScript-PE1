/*Q 12 Write a JavaScript function that accepts two arguments,    a string and a letter and the function will    count the number of occurrences of the specified letter within the    string.
        Sample arguments : 'gmail.com', 'm'
        Expected output : 2
*/
function charCount(str, letter) 
{
  var letterCount = 0;
  for (var position = 0; position < str.length; position++) 
  {
    //charAt() is a method that returns the character from the specified index.
    if (str.charAt(position) == letter) 
      {
        letterCount += 1;
      }
  }
  return letterCount;
}
console.log(charCount('gmail.com', 'm'));