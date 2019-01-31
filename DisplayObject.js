/*Q 14. Consider the following object:
var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

Exercise 1: Display all objects with occupation as 'Programmer'

Exercise 2: Sort the object basis the age key in the descending order


Exercise 3: Recreate the above array of objects into the following object of objects :{ 'Team Leader' : [{'name':_____________, 'age':__________},{}],
'<anotheroccupation>': [{'name':______________, 'age':________},{}]}

Exercise 4: Use the map function to create a new array containing only names present in myObj.

Expected output:

[ 'Saurabh'
 'Anupriya',
 'Kalyani',
 'Damodaran',
 'Krishnakath',
 'Venketraman' ]
*/
var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

console.log("\n****************************************\n");
console.log("Display all objects with occupation as 'Programmer'");
console.log("\n****************************************\n");

//Display all objects with occupation as 'Programmer
//filter() creates a new array with elements that fall under a given criteria from an existing array:
var result1 = myObj.filter(function(obj) {
  
    //"===": strict comparision,true if the operands are of the same type and the contents match
    return obj.occupation === "Programmer"     
})
console.log(result1)

console.log("\n****************************************\n");
console.log("Sort the object basis the age key in the descending order");
console.log("\n****************************************\n");

//Sort the object basis on the age key in the descending order
//The slice( ) method copies a given part of an array and returns that copied part as a new array. It doesn’t change the original array.
var byAge = myObj.slice(0);  //slice(0) means from index 0 till end of array
byAge.sort(function(a,b) {
    return a.age - b.age;
});
console.log(byAge)

console.log("\n****************************************\n");
console.log("Recreate the above array based on team leader and programmer");
console.log("\n****************************************\n");

//Recreate the above array based on team leader and programmer
var Team_Leader = myObj.filter(obj => {    //function(obj) <=> obj => arrow function
    return obj.occupation === "Team Leader"
  })
  for (var i = 0, len = Team_Leader.length; i < len; i++) {
    delete(Team_Leader[i].occupation);
}

var Programmer = myObj.filter(obj => {
    return obj.occupation === "Programmer"
  })
  for (var i = 0, len = Programmer.length; i < len; i++) {
    delete(Programmer[i].occupation);
}
var result2 = {};
result2["programmer"]=Programmer;
result2["team leader"]=Team_Leader;
console.log(result2);

console.log("\n****************************************\n");
console.log("Use the map function to create a new array containing only names present in myObj");
console.log("\n****************************************\n");
 
//Use the map function to create a new array containing only names present in myObj.
let result3 = myObj.map(a => a.name)   
console.log(result3)