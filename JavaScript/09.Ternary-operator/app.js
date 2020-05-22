// JS Conditions (suite) -----> 2020.05.05
/* Using the ternary operator create a condition who checks if today is Tuesday*/function checkDays(day) {

  let weekday = new Array(7);
  
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  if(day < 0 || day > 6){
    return "Error";
  }

  return "Today is " + weekday[day];
}

show(checkDays(2));   // "Today is Tuesday"
show(checkDays(8));   // "error"
show(checkDays(5));   // "Today is Friday"
show(checkDays(-6));  // "error"