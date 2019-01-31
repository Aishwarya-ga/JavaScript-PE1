function toRemoveDuplicate(){
    var input = [1,2,2,4,5,6,7,7];
    /*The Set object which lets you store unique 
    *values of any type. In other words, Set will 
    *automatically remove duplicates for us.*/
   //...(spread operator)
    let unique = [...new Set(input)];
    console.log(unique);
}
toRemoveDuplicate();