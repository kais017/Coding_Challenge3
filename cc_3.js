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

// Task 3: Employee Performance Tracking Scenario
let employee = {
    name: "Paul Atreides",
    role: "Kwisatz Haderach",
    performanceScore: 100,
    isActive: true
} // employee properties

let UpdatedperformanceScore = 50; // updating the performance score
let promotionEligible = UpdatedperformanceScore >= 80 ? "Promotion Eligible" : "Promotion Not Eligible"; 
// applying the condition that the employee must have a performance score of 80 or higher to be eligible for a promotion

console.log(employee); 
console.log("Performance Score:", employee.performanceScore);
console.log("Updated Performance Score:", UpdatedperformanceScore);
console.log(promotionEligible);
// Logging Task 3

// Task 4: Customer Feedback Records
let feedback = [
   { customerName: "Chani", feedbackText: "This product sucks.", rating: 1 },
   { customerName: "Baron Harkonnen", feedbackText: "I love this product.", rating: 10  },
   { customerName: "Lady Jessica ", feedbackText: "This Product is so helpful", rating: 9}
]; // Making an array of customers with their feedback and ratings of the products

   feedback.push({customerName: "Feyd Rautha", feedbackText: "I hate this product.", rating: 0})
// added a new customer 

console.log(feedback);
// Logging array

// Task 5: Inventory Management System Scenario
let inventory = {itemName: "sneakers", stockCount: 3000, price: 250 } 
// creating the object "inventory" and listing all of its properties

calculateTotalValue = inventory.stockCount *= inventory.price 
// calculating the total value of our inventory by multiplying stock count by price

console.log(inventory);
console.log("Total Value of inventory: $", calculateTotalValue);
// Logging task 5!! yay

