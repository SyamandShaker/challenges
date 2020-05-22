# Conditions (suite) -----> 2020.05.21
# Equality of 3 Values

def equal(a, b, c):

	if ( a == b and b == c):
		return "3 --> All 3 values are equal"
	
	elif ( a == b or b == c or a == c):
		return "2 --> Two values are equal"
		
	else:
		return "0 --> All values are differents"

print(equal(31, 42, 20))	   # All values are differents
print(equal(19, 11, 19))	   # Two values are equal
print(equal(5, 5, 5))			   # All 3 values are equal
print(equal(8, 15, 25))		   # All values are differents