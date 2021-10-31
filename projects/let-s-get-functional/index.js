// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./dahlak-keleta.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //using filter to grab only the male customer objects
    return _.filter(array, function(customerObj){
        //returning only objects with gender property that strictly equal 'male'
        return customerObj.gender === "male";
        //using .length to get the number of male objects in newly filtered array
    }).length
};

var femaleCount = function(array){
    //set variable for reduce function (ladies)
    //assigning accumulator  parameter to count and customerObj to current
    let ladies = _.reduce(array, function(count, customerObj){
        //using conditional to identify female from each customerObj 
      if(customerObj.gender === "female"){
          //add each iteration of female to count
          count++;
      }  
      return count;
      //assigning seed to number to later return a number(the count); count = seed
    }, 0)
      return ladies;
};

var oldestCustomer = function(array){
    let oldCust = _.filter(array,function(count, currentAge){
        var oldestCust = 0;                          //creatte new var for oldest cust                                        //loop thru arr to find oldest cust
        if(currentAge.age > count)                   //if current is greater than previous
           oldestCust = currentAge.age;
           count++;                                  //return value to new arr
    })  
    return oldestCust;                               //return cust name in string
};
    return oldestCust.name = "";

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
