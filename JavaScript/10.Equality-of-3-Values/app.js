// JS Conditions (suite) -----> 2020.05.05
/* edabit - Equality of 3 Values*/
function equal(a, b, c) {

	if ( a == b & b == c)
	{
		return 3 + " --> " + " All 3 values are equal";
	}
	else if ( a == b || b == c || a == c)
			{
				return 2 + " --> " + " Two values are equal";
			}
	else
		{
			return 0 + " --> " + " All values are differents";
		}
}

show(equal(31, 42, 20));	// All values are differents
show(equal(19, 11, 19));	// Two values are equal
show(equal(5, 5, 5));			// All 3 values are equal
show(equal(8, 15, 25));		// All values are differents