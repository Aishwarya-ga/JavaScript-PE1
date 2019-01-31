/*Q 2 Write a JavaScript conditional statement to find the largest of five numbers?*/

//readlineSync tries to let your script have a conversation with the user via a console
var readline = require('readline-sync');

function largestOfNumbers(){
    var number = [];
    for(var index = 0; index < 5;index++){
        //.question() method displays the query by writing it to the output, waits for user input to be provided on input
        number[index] = readline.question("Enter the"+" "+(index+1)+" "+"number\n")
    }
    var largest =0;
    number.forEach(function(item){
       if(item>largest){
           largest = item;
       }
    })
    return largest;
}
console.log("Largest of all numbers is"+":"+largestOfNumbers());
/*
   this will also return the max elements in array
   return (Math.max(...number))
*/