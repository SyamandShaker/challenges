// JS Loops
// Count genders
/* Create an array containing 6 persons, girls and boys. Each person should have 2 keys, name and gender.*/ 
let countGenders = [
  {
    name:   "Robin", 
    gender: "Girl", 
  },
  {
    name:   "Mokey D Lufy", 
    gender: "Boy", 
  },
  {
    name:   "Zoro", 
    gender: "Boy", 
  },
  {
    name:   "Nami", 
    gender: "Girl", 
  },
  {
    name:   "Franky", 
    gender: "Boy", 
  },
  {
    name:   "Big Mama", 
    gender: "Girl", 
  }
];
/* Loop into the array and check how many girls and boys do you have. */
let numDeBoys = 0;
let numDeGirls = 0;
for(let i = 0; i < countGenders.length; i++){

  let gender = countGenders[i].gender;
  if(gender == "Girl"){
    numDeGirls++;
  }
  else {
    numDeBoys++;
  }
}
show("My list contains : " + numDeBoys + " boys");
show("My list contains : " + numDeGirls + " girls");


/* countGenders.forEach(function(item) {
  show(item.gender);
}); */
//show(countGenders.length);