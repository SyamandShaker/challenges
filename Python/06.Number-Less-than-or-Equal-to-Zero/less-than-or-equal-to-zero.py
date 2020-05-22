# Conditions -----> 2020.05.21
# Is the Number Less than or Equal to Zero ?
num = 0
def lessThanOrEqualToZero(num):
  
  if(num <= 0):
    return True

  else:
    return False

print(lessThanOrEqualToZero(0))     # true
print(lessThanOrEqualToZero(3))     # false
print(lessThanOrEqualToZero(-5))    # true
print(lessThanOrEqualToZero(10))    # false