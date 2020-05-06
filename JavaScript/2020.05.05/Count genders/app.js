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
show("Numbre de garcons : " + numDeBoys);
show("Numbre de filles : " + numDeGirls);


/* countGenders.forEach(function(item) {
  show(item.gender);
}); */
//show(countGenders.length);