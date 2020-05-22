// -----> 2020.04.28
// Extract City Facts
let listProfit = [

  ({
    costPrice: 1.45,
    sellPrice: 8.5,
    inventory: 10000
  }),

  ({
    costPrice: 10780,
    sellPrice: 34999,
    inventory: 10
  }),

  ({
    costPrice: 68.01,
    sellPrice: 149.99,
    inventory: 500
  }),

  ({
    costPrice: 99.99,
    sellPrice: 199.99,
    inventory: 999
  })

];

function profit(info) {

  let costPrice = info.costPrice; 
	let sellPrice = info.sellPrice;
	let inventory = info.inventory;

	return Math.round((inventory * sellPrice) - (inventory * costPrice));
}
show(profit(listProfit[0])); // 70500
show(profit(listProfit[1])); // 242190
show(profit(listProfit[2])); // 40990
show(profit(listProfit[3])); // 99900