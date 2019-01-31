/*Q 15 Convert the following JSON string to an object and access the 
  value of the jason property.

    var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
*/

/*
   method for converting the JSON string to object
*/
function convertJsonToString(string){

    //JSON.parse will parse the JSON string, and the string becomes a JavaScript object.
    var jsonObj = JSON.parse(string);
    console.log(jsonObj);

    //running through loop for printing key and value pairs
    for(var key in jsonObj){
        console.log("Key : "+ key + " , value : "+jsonObj[key]);
    }

}
var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
convertJsonToString(jsonStr);
