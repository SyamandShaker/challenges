# Conditions (suite) -----> 2020.05.21
# Strictly Increasing or Decreasing
def check(arr):

	if (arr[1] == arr[0]):
		return 'neither'
  
	elif (arr[1] > arr[0]):
		return 'increasing'
  
	else: 
		return 'decreasing'
	

print(check([1, 2])) 				# increasing
print(check([6, 5])) 			  # decreasing
print(check([1, 1])) 		    # neither
print(check([60, 50])) 	    # decreasing