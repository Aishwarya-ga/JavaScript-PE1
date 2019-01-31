/*Q 16 Consider this object:
    var obj = {
        "One":"1",
        "Two":"2",
        "Three":"3",
        "Four":"4"
    }
    Convert it into JavaScript array like:
    ["1","2","3","4"]
*/
function returnOnlyFromObjects(object){
    
    //Object.keys(obj) – returns an array of keys
    //The map() method creates a new array with the results of calling a 
    //provided function on every element in the calling array
    var result = Object.keys(obj).map(function(key) {
        return  obj[key];
    });
    console.log(result);
}
var obj = {"One":"1","Two":"2","Three":"3","Four":"4"}
returnOnlyFromObjects(obj);
