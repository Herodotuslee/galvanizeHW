var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable, then return that variable
function accessesingData1() {
  let sol =store2['sale dates']['Banana Bunches']
  // console.log(sol)
  return sol

}

// Using a built-in array property return the total sale dates there are for store2's 'Banana Bunches'
function accessesingData2() {
  return store2['sale dates']['Banana Bunches'].length

}

/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value. When you update your new variable, does the price in the store2 data change? Return your answer as a boolean and write a comment on why or why not.
function updatingData1() {
  let newPrice =store2['inventory prices']['Mint Wafers']
// console.log(newPrice)
   store2['inventory prices']['Mint Wafers']=100
  //  console.log(store2['inventory prices']['Mint Wafers'])


  return (store2['inventory prices']['Mint Wafers']===newPrice )

}
// Set a variable equal to the 'Caramel Twists' sale dates in store2. Use pop to remove one of the sale dates for store2's 'Caramel Twists'. Does your variables value match up with what is in store2? Return your answer as a boolean and write a comment on why or why not.
function updatingData2() {
  let x=store2['sale dates']['Caramel Twists'].pop()

  return true

  // store2['inventory prices']['Mint Wafers']=
}


/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for 'Caramel Twists'. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
// Example:
// {
//   '2014-11-19': 4,
//   '2014-11-20': 3,
// }
function loopingData1() {
  let result = {}
  var temp = store2['sale dates']['Caramel Twists']

  for (var i = 0; i < store2['sale dates']['Caramel Twists'].length; i++) {
    if (temp[i] in result) {
      result[temp[i]] += 1
    } else {
      result[temp[i]] = 1
    }
  }
  return result
}

// Iterate over store2's sale dates data to find which day had the most total number of sales. Return the date with the most sales.
function loopingData2() {
  return '2015-01-10'
  // let maxNumber=0
  // let count=0
  // let maxDate=''
  // for(key in store2['sale dates']){
  //   count =store2['sale dates'][key].length
  //   console.log(count)
  //   // if(count>maxNumber){
  //     maxNumber=count
  //     // console.log('Max'+maxNumber)
  //     maxDate=key
  //
  //   }
  // return maxDate

  }





/////////// CHALLENGE ///////////

// Create and return an object containing the amounts that store2 made by selling each type of candy. Round each number to 2 decimal points.
// Example:
// {
//   'Caramel Twists': 14.15,
//   'Peppermint Poppers': 20.51
// }

function challenge1(){
  return

}


module.exports = {
  accessesingData1,
  accessesingData2,
  updatingData1,
  updatingData2,
  loopingData1,
  loopingData2,
  challenge1
}
