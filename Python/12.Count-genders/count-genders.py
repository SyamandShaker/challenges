# Loops -----> 2020.05.21
# Count genders
# Create an array containing 6 persons, girls and boys. Each person should have 2 keys, name and gender.
countGenders = [
  {
    "name":   "Robin", 
    "gender": "Girl", 
  },
  {
    "name":   "Mokey D Lufy", 
    "gender": "Boy", 
  },
  {
    "name":   "Zoro", 
    "gender": "Boy", 
  },
  {
    "name":   "Nami", 
    "gender": "Girl", 
  },
  {
    "name":   "Franky", 
    "gender": "Boy", 
  },
  {
    "name":   "Big Mama", 
    "gender": "Girl", 
  }
]
# Loop into the array and check how many girls and boys do you have.
numDeBoys = 0
numDeGirls = 0

for i in range (0, len(countGenders)):

  gender = countGenders[i]["gender"]
  if(gender == "Girl"):
    numDeGirls = numDeGirls + 1

  else:
    numDeBoys = numDeBoys + 1

print("My list contains : " + str(numDeBoys) + " boys")     # My list contains : 3 boys
print("My list contains : " + str(numDeGirls) + " girls")   # My list contains : 3 girls