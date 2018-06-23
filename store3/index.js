var store3 = require('./store3-data.js');

//()()()()() ACCESSING DATA ()()()()()\\

// Return Berry Bites data for store3 on January 7.
function accessesingData1() {

  for(let i=0;i<store3.length;i++){
    if(store3[i]['date']==='2015-01-07'){
      return store3[i]['inventory sold']['Berry Bites']
  }
  }
}
// Return how many Mint Wafers were sold on January 9th

function accessesingData2() {

    for(let i=0;i<store3.length;i++){
      if(store3[i]['date']==='2015-01-09'){
        return store3[i]['inventory sold']['Mint Wafers']['quantity']
    }
    }
  }
//     for(let i=0;i<store3.length;i++){
//     if(store3[i]['date']==='2015-01-09'){
//       return sotre3[i]['inventory sold']['Mint Wafers']['quantity']
//
//   }
// }
// }

// Return total number of dates included in the dataset.
function accessesingData3() {

  return store3.length
  // let sum =0
  // for(let i=0;i<store3.length;i++){
  //   for(let key in store3[i]['inventory sold']){
  //   sum += store3[i]['inventory sold'][key]['cost']+store3[i]['inventory sold'][key]['quantity']
  //
  // }
  //
  // }
  // return sum



}

//()()()()() LOOPING OVER DATA ()()()()()\\

// Create a loop to iterate over the sale data from store3. Use this loop to return an array of dates contained in the sale data.
function loopingData1() {
  let result = [];

  for ( let item in store3 ) {
    result.push(store3[item].date);
  }

  return result;
}
// Use `Object.keys()` to loop over the inventory sold for January 10th in store3. While iterating over the data, create an object containing each candy's name and price. Return the result.
// Example:
// {
//   'Dark Chocolate Crunchies': 1.30,
//   'Mint Wafers': 1.40,
//   ...
// }
function loopingData2() {
  let candies = store3[4]['inventory sold']
  let prices = {}
  for (let candy in candies) {
    prices[candy] = candies[candy]['cost']
  }
  return prices
}

// Create a loop to iterate over the whole store3 variable to find out how many Peanut Butter Buttered Peanuts were sold over all dates. Return the result.
function loopingData3() {
  var count = 0;
  for (var i=0; i<store3.length; i++) {
    count += store3[i]['inventory sold']['Peanut Butter Buttered Peanuts']['quantity']
  }
 return count
}



//()()()()() CHALLENGE ()()()()()\\

// Determine how much money store3 made on January 9th and return the result fixed to two decimal points
function challenge1() {
  let sum = 0;
  let money = store3[3]["inventory sold"];

  for ( var item in money ) {
    let cost = money[item].cost;
    let count = money[item].quantity;
    sum += (cost * count);
  }
  return Number(sum.toFixed(2));
}



module.exports = {
  accessesingData1,
  accessesingData2,
  accessesingData3,
  loopingData1,
  loopingData2,
  loopingData3,
  challenge1
}
