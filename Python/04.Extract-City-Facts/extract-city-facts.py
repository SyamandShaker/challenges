# -----> 2020.05.19
# Extract City Facts

citys = {

  "berlin" : {
    "name": "Berlin",
    "population": "3,748,148",
    "continent": "Europe"
  },

  "manila" : {
    "name": "Manila",
    "population": "1,780,148",
    "continent": "Asia"
  },

  "paris": {
    "name": "Paris",
    "population": "2,140,526",
    "continent": "Europe"
  },

  "rome": {
    "name": "Rome",
    "population": "4,100,987",
    "continent": "Europe"
  }
}

def cityFacts(key):

  city = citys[key]

  name = city["name"]
  population = city["population"]
  continent = city["continent"]

  return str(name) + " has a population of " + str(population) + " and is situated in " + str(continent)

print(cityFacts("berlin"))     # Berlin has a population of 3,748,148 and is situated in Europe
print(cityFacts("manila"))     # Manila has a population of 1,780,148 and is situated in Asia
print(cityFacts("paris"))      # Paris has a population of 2,140,526 and is situated in Europe
print(cityFacts("rome"))       # Rome has a population of 4,100,987 and is situated in Europe