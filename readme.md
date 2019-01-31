##JavaScript Exercise Set 1

Q 1 Write a JavaScript program to display the current day and time in the following format mm/dd/yyyy?

Q 2 Write a JavaScript conditional statement to find the largest of five numbers?

Q 3 Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8?

Q 4 Write a JavaScript program to sort strings items of an array in both alphabetically ascending and descending order?

Q 5 Write a JavaScript program to remove duplicate items from an array?

Q 6 Write a JavaScript function to find the difference of two arrays?

Q 7 Write a JavaScript function to sort the following array of objects by title value?

Sample object :
var library = [
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
Expected result :

[[object Object] {
author: "Suzanne Collins",
libraryID: 3245,
title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
author: "Bill Gates",
libraryID: 1254,
title: "The Road Ahead"
}, [object Object] {
author: "Steve Jobs",
libraryID: 4264,
title: "Walter Isaacson"
}]

Q 8 Write a pattern that matches e-mail addresses?
a.Uppercase (A-Z) and lowercase (a-z) English letters.
b.Digits (0-9).
c.Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
d.Character . ( period, dot or fullstop) provided that it   is not the first or last character and it will not come   one after the other.

Q 9 Write a JavaScript program to list the properties of a JavaScript object?
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

Sample Output : name, sclass, rollno

Q 10 Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade?

Student Name    Marks
David        80
Vinoth        77
Divya        88
Ishitha        95
Thomas        68

Range    Grade
<60    F
<70    D
<80    C
<90    B
<100    A

Q 11 Write a JavaScript function that returns a passed string    with letters in alphabetical order?
Example string : 'webmaster'
Expected Output : 'abeemrstw'


Q 12 Write a JavaScript function that accepts two arguments,    a string and a letter and the function will    count the number of occurrences of the specified letter within the    string.

Sample arguments : 'gmail.com', 'm'
Expected output : 2

Q 13 Flatten the following object:var myObj = [5, [22], [[14]], [[4]],[5,6]]
Note: the output should be in the form:[ 5, 22, 14, 4, 5, 6 ]


Q 14. Consider the following object:
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


Q 15 Convert the following JSON string to an object and access the value of the jason property.

var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';


Q 16 Consider this object:

var obj = {
"One":"1",
"Two":"2",
"Three":"3",
"Four":"4"
}
Convert it into JavaScript array like:
["1","2","3","4"]

Q 16

Consider the following JSON data:
{
"status": "ok",
"source": "the-next-web",
"sortBy": "latest",
"articles": [
 {
"author": "Bryan Clark",
"title": "Spotify is using billboards to call users out on their questionable listening habits",
"description": "In a hilarious new marketing campaign, Spotify is taking to billboards to pose some rather serious questions (and provide commentary) about its users. One of the new billboards, for example, will read: “Dear person who made a playlist called: ‘One Night Stand With Jeb Bush Like He’s a Bond Girl in a European Casino.’ We …",
"url": "http://thenextweb.com/music/2016/11/30/spotify-is-using-billboards-to-call-users-out-on-their-questionable-listening-habits/",
"urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/Screen-Shot-2016-11-29-at-5.45.53-PM.png",
"publishedAt": "2016-11-30T07:38:09Z"
},
{
"author": "Bryan Clark",
"title": "Man in VR headset falls off fake cliff and hits a very real floor",
"description": "One day, we’ll have an entire Tumblr account for hilarious VR accidents, but until then, George Takei’s Facebook account will have to do. Takei, the Star Trek alum and current boss of sharing things on Facebook, recently shared a video of a man attempting to conquer a virtual cliff while inside an Oculus headset; it …",
"url": "http://thenextweb.com/virtual-reality/2016/11/30/man-in-vr-headset-falls-off-fake-cliff-and-hits-a-very-real-floor/",
"urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/man-falling.png",
"publishedAt": "2016-11-30T00:00:30Z"
},
 {
"author": "Napier Lopez",
"title": "Microsoft's new app tries to fix Android's copy and paste problem",
"description": "For an OS typically preferred by power-users, Android has an embarrassing amount of trouble with copy and paste. Sometimes it works just fine, but in other apps you can only copy entire huge swaths of text, or worse – nothing at all. Microsoft’s new Clip Layer app wants to fix that by letting you copy …",
"url": "http://thenextweb.com/apps/2016/11/29/microsofts-new-app-tries-fix-androids-copy-paste-problem/",
"urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/Microsoft-Clip-Layer.png",
"publishedAt": "2016-11-29T22:11:20Z"
},
 {
"author": "Bryan Clark",
"title": "Dueling smart assistants give zero fucks about your calendar",
"description": "If you’ve ever wondered about the infinite loop one could create by pairing two smart home assistants, it’s this. YouTuber Adam Jakowenko used both an Amazon Echo Dot, and a Google Home device to answer a simple question: “what’s on my calendar for tonight?” Using the Echo first, the device dutifully read off the beginning …",
"url": "http://thenextweb.com/shareables/2016/11/29/its-like-dividing-by-zero/",
"urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/Screen-Shot-2016-11-29-at-12.29.12-PM.png",
"publishedAt": "2016-11-29T21:44:47Z"
},
 {
"author": "Bryan Clark",
"title": "This Chrome extension replaces 'alt-right' with 'white supremacist'",
"description": "This election season, the term ‘alt-right’ went from relative obscurity to the forefront of our collective conscious in a matter of weeks. Man-sized Oompa-Loompa aside, the real winner in the 2016 election was a term many believe to be synonymous with white supremacy. Call it the politically correct way to say ‘white supremacist’ for a …",
"url": "http://thenextweb.com/google/2016/11/29/this-chrome-extension-replaces-alt-right-with-white-supremacist/",
"urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/Screen-Shot-2016-11-29-at-10.25.43-AM.png",
"publishedAt": "2016-11-29T18:40:39Z"
},
{
"author": "Juan Buis",
"title": "Disney's new animatronic robots are getting too realistic for me",
"description": "Disney will soon be opening a new Avatar-themed experience in Disneyworld Florida, and its new animatronic robots are ridiculously realistic.",
"url": "http://thenextweb.com/shareables/2016/11/29/disney-robots/",
"urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/disney.gif",
"publishedAt": "2016-11-29T16:00:56Z"
}]
}



You need to create a program that extracts data from the preceding JSON in the following format:
[
    {  author: .. , title: '' , description:'' },
    {  author: '' , title: '' , description:'' },
    {  author: .. , title: '' , description:'' },
     .....
]

