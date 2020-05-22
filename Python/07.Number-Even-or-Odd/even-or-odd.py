# Conditions -----> 2020.05.21
# Is the Number Even or Odd ?
num = 0
def isEvenOrOdd(num):

 if(num % 2):
  return "odd"
  
 elif(num % 2 - 1):
  return "even"
  

print(isEvenOrOdd(2))    # "even"
print(isEvenOrOdd(5))    # "odd"
print(isEvenOrOdd(-8))   # "even"
print(isEvenOrOdd(-15))  # "odd"