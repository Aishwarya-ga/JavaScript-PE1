/*Q 8 Write a pattern that matches e-mail addresses?
    a.Uppercase (A-Z) and lowercase (a-z) English letters.
    b.Digits (0-9).
    c.Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
    d.Character . ( period, dot or fullstop) provided that it   is not the 
       first or last character and it will not come   one after the other.
*/
function toCheckValisMailFormat(mail){
    
    //regular expression for email
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    /*
     *   The test() method tests for a match in a string.This method returns 
     *     true if it finds a match, otherwise it returns false.
     */
     if(regex.test(mail)){
        console.log("valid email id");
    }
    else{
        console.log("Not a valid email id");
    }
}
var mailId = 'aishu047@gmail.com'
toCheckValisMailFormat(mailId);