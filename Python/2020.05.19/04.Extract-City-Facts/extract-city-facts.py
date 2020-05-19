# Extract City Facts
citys = [

  ({
    "name": "Berlin",
    "population": "3,748,148",
    "continent": "Europe"
  }),

  ({
    "name": "Manila",
    "population": "1,780,148",
    "continent": "Asia"
  }),

  ({
    "name": "Paris",
    "population": "2,140,526",
    "continent": "Europe"
  }),

  ({
    "name": "Rome",
    "population": "4,100,987",
    "continent": "Europe"
  })

]

def cityFacts(city):

  name = city.name
	population = city.population
	continent = city.continent

	return str(name) + " has a population of " + str(population) + " and is situated in " + str(continent)

print(cityFacts(citys[0]))     # Berlin has a population of 3,748,148 and is situated in Europe
print(cityFacts(citys[1]))     # Manila has a population of 1,780,148 and is situated in Asia
print(cityFacts(citys[2]))     # Paris has a population of 2,140,526 and is situated in Europe
print(cityFacts(citys[3]))     # Rome has a population of 4,100,987 and is situated in Europe