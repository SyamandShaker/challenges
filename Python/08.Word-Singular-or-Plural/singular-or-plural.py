# Conditions -----> 2020.05.21
# Is the Word Singular or Plural?
def isPlural(word):
  
 if(word.endswith("s")):
  return True

 else:
  return False
  
  #// OR just --->  return  word.endsWith('s')

print(isPlural("Lovers"))     # true
print(isPlural("Lufy"))       # false
print(isPlural("Carottes"))   # true
print(isPlural("Roronoa"))    # false

