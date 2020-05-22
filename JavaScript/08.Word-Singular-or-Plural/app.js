// JS Conditions ----> 2020.04.30
/* Is the Word Singular or Plural? */
function isPlural(word) {
  
  if(word.endsWith('s')){
    return true;
  }
  else{
    return false;
  }
  // OR just --->  return  word.endsWith('s')

}
show(isPlural("Lovers"));     // true
show(isPlural("Lufy"));       // false
show(isPlural("Carottes"));   // true
show(isPlural("Roronoa"));    // false

