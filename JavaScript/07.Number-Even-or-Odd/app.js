// JS Conditions ----> 2020.04.30
/* Is the Number Even or Odd ? */ 
let num = 0;
function isEvenOrOdd(num) {
  if(num % 2){
    return "odd";
  }
	else if(num % 2 - 1){
    return "even";
  }
}
show(isEvenOrOdd(2));   // "even"
show(isEvenOrOdd(5));   // "odd"
show(isEvenOrOdd(-8));  // "even"
show(isEvenOrOdd(-15)); // "odd"