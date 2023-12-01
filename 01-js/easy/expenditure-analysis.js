/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  let ansObj = [];

  for (const transaction of transactions) {

    const category = transaction.category;
    const price = transaction.price;
    let found = false;

    for(let i=0; i< ansObj.length; i++) {
      if(ansObj[i].category === category) {
        ansObj[i].totalSpent += price;
        found = true;
        break;
      }
    }

    if(found === false) {
      let obj = {
        category: category,
        totalSpent: price
      };
      
      ansObj.push(obj);
      found = true;
    }

  }

  return ansObj;
}

module.exports = calculateTotalSpentByCategory;
