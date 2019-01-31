/*Q 4 Write a JavaScript program to sort strings items of an array 
  in both alphabetically ascending and descending order?
*/
function toSortStringItems(){
    var stringItems = [1,4,2,5,0];
    //sort() method sorts array in ascending order
    console.log(stringItems.sort());
    //reverse() method reverse the given array
    console.log(stringItems.reverse());
}
toSortStringItems();