/*Q 1 Write a JavaScript program to display the current day and time 
  in the following format mm/dd/yyyy?
*/

/*
   method to get the current date and time
*/    
function currentDateAndTime(){

    //new Date() creates a new date object with the current date and time
    var today = new Date();

    //The getDate() method returns the day of a date as a number (1-31):
    var date = today.getDate();

    //The getMonth() method returns the month of a date as a number (0-11):
    var month = today.getMonth()+1;

    //The getFullYear() method returns the year of a date as a four digit number:
    var year = today.getFullYear();

    //The getHours() method returns the hours of a date as a number (0-23):
    var hour = today.getHours();
    
    //The getMinutes() method returns the minutes of a date as a number (0-59):
    var minute = today.getMinutes();

    //The getSeconds() method returns the seconds of a date as a number (0-59):
    var second = today.getSeconds();

    console.log(month+"/"+date+"/"+year);
    console.log(hour+"hr:"+minute+"min:"+second+"sec");
}
currentDateAndTime();