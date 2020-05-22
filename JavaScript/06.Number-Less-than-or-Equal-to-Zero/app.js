// JS Conditions ----> 2020.04.30
/* Is the Number Less than or Equal to Zero ?*/
let num = 0;
function lessThanOrEqualToZero(num) {
  
  if(num <= 0){
    return true;
  }
  else{
    return false;
  }
}
show(lessThanOrEqualToZero(0));  // true
show(lessThanOrEqualToZero(3));  // false
show(lessThanOrEqualToZero(-5)); // true
show(lessThanOrEqualToZero(10));  // false