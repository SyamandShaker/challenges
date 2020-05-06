let day = 2;
let today = "Tuesday"; 

if(day == 2) {
  show("Today is " + today);
}
else if(day != 2) {
  show("Today is not Tuesday")
}





/* function checkDays() {

  let output  = "";
  let day = new Date();
  let weekday = new Array(7);
  
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  
  let n = weekday[day.getDay()];

  if(weekday == 2) {
    output = "Today is " + n;
  }
  else if(weekday != 2) {
    output = "Today is not Tuesday";
}

  show(output, "New message");

  
}

checkDays(2); */