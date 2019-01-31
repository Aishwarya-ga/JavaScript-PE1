/*Q 3 Write a JavaScript program which accept a number as input and 
    insert dashes (-) between each two even numbers. For example if you accept 
    025468 the output should be 0-254-6-8?
*/

//readlineSync tries to let your script have a conversation with the user via a console
var readline = require('readline-sync');

function toInsertHyphenBetweenEvenNumbers(){
    //.question() method displays the query by writing it to the output, waits for user input to be provided on input
    var numberString = readline.question("Enter a number\n");
    var result = [numberString[0]];
    for(var x=1;x < numberString.length;x++){
        if((numberString[x-1]%2==0) && (numberString[x]%2==0)){
            result.push('-',numberString[x]);
        }
        else{
            result.push(numberString[x]);
        }
    }
    console.log(result.join(''));
}
//calling the function
toInsertHyphenBetweenEvenNumbers();