var store4 = require('./store4-data.js');

// ^^^^^^^^^^^^ ACCESSING DATA ^^^^^^^^^^^^

// Return the cost of 'Dark Chocolate Crunchies' from store4
function accessesingData1() {
  return store4['Dark Chocolate Crunchies']['cost'];
}

// Return the total number of 'Berry Bites' sold by store4
function accessesingData2() {
  return store4['Berry Bites']['sold on'].length;
}

// ^^^^^^^^^^^^ LOOPING OVER DATA ^^^^^^^^^^^^
// Create a loop to return an array of the candy names that cost more than $2.00
function loopingData1() {
  let list = [];
  for (let key in store4) {
    if (store4[key]['cost'] > 2) {
      list.push(key);
    }
  }
  return list;

  //if the value stored in the ['cost'] key is greater than 2.00, then push the name of that candy to return array

}

// Create a loop to return an object that has the candy name as the key and the cost as the value
function loopingData2() {
  let candyCost = {};
  for (let key in store4) {
    candyCost[key] = store4[key]['cost'];
  }
  return candyCost;
}

// ^^^^^^^^^^^^ CHALLENGE ^^^^^^^^^^^^
// Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? Each date represents 1 item sold. Round revenue to two decimal points. Return your answer as an array: `[total1, total2]`
function challenge1() {

}

// Calculate and return how much money store4 made on January 9th. Round to two decimal points.
function challenge2() {

}

// Calculate and return how much store4 made from selling Dark Chocolate Crunchies across all the days. Round to two decimal points.
function challenge3() {

}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  challenge1,
  challenge2,
  challenge3,
}
