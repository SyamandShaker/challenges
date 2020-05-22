# -----> 2020.05.19
# function who returns the area of a surface in m2
def calcSurface(length, width):
    
    result = length * width
    round_result = round(result, 1)
    return  "The area is " + str(round_result) + " m2"

print(calcSurface(4.2, 2.283))         # The area is 9.6 m2
print(calcSurface(16, 7.2))            # The area is 115.2 m2
print(calcSurface(9, 9.8766436346))    # The area is 88.9 m2
print(calcSurface(12.12, 15))          # The area is 181.8 m2
