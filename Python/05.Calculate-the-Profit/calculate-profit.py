# -----> 2020.05.19
# Extract City Facts
listProfit = {

  "a1":{
    "costPrice": 1.45,
    "sellPrice": 8.5,
    "inventory": 10000
  },

  "a2":{
    "costPrice": 10780,
    "sellPrice": 34999,
    "inventory": 10
  },

  "a3":{
    "costPrice": 68.01,
    "sellPrice": 149.99,
    "inventory": 500
  },

  "a4":{
    "costPrice": 99.99,
    "sellPrice": 199.99,
    "inventory": 999
  }

}

def profit(key):

  info = listProfit[key]

  costPrice = info["costPrice"]
  sellPrice = info["sellPrice"]
  inventory = info["inventory"]

  return round((inventory * sellPrice) - (inventory * costPrice))


print(profit("a1"))     # 70500
print(profit("a2"))     # 242190
print(profit("a3"))     # 40990
print(profit("a4"))     # 99900