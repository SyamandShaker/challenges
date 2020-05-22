// JS Conditions (suite) -----> 2020.05.05
// edabit - Strictly Increasing or Decreasing
function check(arr) {

	if (new Set(arr).size !== arr.length) {
		return 'neither';
  } 
  
	else if (arr[1] > arr[0]) {
		return 'increasing';
  }
  
	else {
		return 'decreasing';
	}
}

show(check([1, 2, 3, 4, 5])); 					// increasing
show(check([6, 5, 4, 3, 2, 1])); 				// decreasing
show(check([1, 2, 2, 4, 5, 6, 7])); 		// neither
show(check([60, 50, 40, 30, 20, 10])); 	// decreasing
