// Extract City Facts
let citys = [

  ({
    name: "Berlin",
    population: "3,748,148",
    continent: "Europe"
  }),

  ({
    name: "Manila",
    population: "1,780,148",
    continent: "Asia"
  }),

  ({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
  }),

  ({
    name: "Rome",
    population: "4,100,987",
    continent: "Europe"
  })

];

function cityFacts(city) {

  let name = city.name; 
	let population = city.population;
	let continent = city.continent;

	return name + " has a population of " + population + " and is situated in " + continent;
}
show(cityFacts(citys[0])); // Berlin has a population of 3,748,148 and is situated in Europe
show(cityFacts(citys[1])); // Manila has a population of 1,780,148 and is situated in Asia
show(cityFacts(citys[2])); // Paris has a population of 2,140,526 and is situated in Europe
show(cityFacts(citys[3])); // Rome has a population of 4,100,987 and is situated in Europe