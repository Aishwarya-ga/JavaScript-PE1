/*Q 6 Write a JavaScript function to find the difference of two arrays?*/

function diffArray(arr1, arr2) {
    var newArray = [];
   
    arr1.forEach(function(val){
        if(arr2.indexOf(val) < 0) 
            newArray.push(val);
    });
   
    arr2.forEach(function(val){
      if(arr1.indexOf(val) < 0) 
            newArray.push(val);
    });
   
    return newArray;
}
var arr1 = [1,2,3];
var arr2 = [2,3,4];
console.log(diffArray(arr1,arr2));

