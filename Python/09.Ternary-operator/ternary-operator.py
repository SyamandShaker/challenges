# Conditions (suite) -----> 2020.05.21
# Using the ternary operator create a condition who checks if today is Tuesday

def checkDays(day):

  weekday = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  if(day < 0 | day > 6):
   return "Error"
   
  else:
   return "Today is " + weekday[day]

print(checkDays(2))    #  "Today is Tuesday"
print(checkDays(6))    #  "Today is Saturday"
print(checkDays(5))    #  "Today isclear Friday"
print(checkDays(8))    #  "error"