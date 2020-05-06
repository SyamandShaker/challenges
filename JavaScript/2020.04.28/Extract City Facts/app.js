function cityFacts(city) {
  let city = [

    ({
      name: "Berlin",
      population: "3,748,148",
      continent: "Europe"
    })
  
    ({
      name: "Manila",
      population: "1,780,148",
      continent: "Asia"
    })
  
    ({
      name: "Paris",
      population: "2,140,526",
      continent: "Europe"
    })
  
  ];


	return city.name + " has a population of " + city.population + " and is situated in " + city.continent;
}
show(city[1]);