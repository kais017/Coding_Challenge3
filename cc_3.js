// Task 1: product prices
let prices = [95,80,65,30,25]; // setting initial prices
prices.push(99);
prices.shift();
console.log("Product Prices:", prices) // logging updated prices after adding 99 and removing 95

// Task 2: Modifying Customer Orders
let orders = [201,202,203,204,205] // order numbers
orders[2] = orders[2]+5 // increase order 203 by 5
let total = orders.reduce((sum, order) => sum + order, 0) // calculating the total of the order numbers
console.log("Orders:", orders)
console.log("Total of orders:", total) 

