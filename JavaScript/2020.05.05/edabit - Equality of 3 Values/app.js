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
show(equal(31, 42, 20));
show(equal(19, 11, 19));
show(equal(5, 5, 5));