// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');
// const _ = require('lodash');
// const _ = require('lodash');
// const { typeOf } = require('../underpants/underpants');
// const { slice } = require('lodash');
// const _ = require('lodash');

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
    let oldestCustomer = _.reduce(array,function(previous, current){
                                                 //creatte new var for oldest cust                                        //loop thru arr to find oldest cust
        if(previous.age > current.age){
            return previous;
        }  else{
            return current;
        }                                           //if current is greater than previous
           
                                                    //return value to new arr
    })  
                                  //return cust name in string

    return oldestCustomer.name;
};
var youngestCustomer = function(array){
    let youngestCustomer = _.reduce(array,function(previous, current){
        if(previous.age < current.age){
            return previous;
        }else{
            return current;
        }
    })
    return youngestCustomer.name;
};

  var averageBalance = function(array){
                                                        // convert string to number, remove $ and commas
                                                        //use map to iterate thru new arr to get balance
 var reduced = _.reduce(customers, function(previous, current){        //declare var reduced, use reduce to get total of balance
    var currbalance = Number(current.balance.replace(/[$,]/g, '')); //declare var and make it a number, for balance, use regex to replace $ & ,
    
    return currbalance+= previous;          //return current bal to add to previous
     }, 0);                                     //add a seed just incase
     
     var average = reduced / customers.length;  //declare var for avrage to equal the reduced which is total divided by cust.length
     
    return average;                         //return avrage

 };

                             

var firstLetterCount = function(customers, letter){
    var customersFirstLetter = _.filter(customers, function(custObj, index, collection){
           // make sure its case sensitve
           // check and see if name[0] is equal to the letter thay we are checking for
           // if true then we want return the names that meet that condition
                   if(custObj.name[0].toUpperCase() === letter.toUpperCase()){
                       return custObj.name
                   }
           
               });
           
               return customersFirstLetter.length
   
   
   };



var friendFirstLetterCount = function(array, customer, letter){
    var customerList = _.filter(array, function(custObj){
        if(custObj.name === customer) {
            return true;
        }
        return false;
            
    })
    var friends = customerList[0].friends;

    var startsWith = _.reduce(friends, function(startsWith, friend){
    
        if(friend.name[0].toLowerCase() === letter.toLowerCase()){
            startsWith += 1;
        }
        return startsWith;
    }, 0);
    return startsWith;
};

var friendsCount = function(customers, givenName) {
    //filter thru cust arr to access each cust obj
    var friendList = _.filter(customers, function(customer) {
        var friends = customer.friends;
        for(var i = 0; i < friends.length; i++){
            if(friends[i].name === givenName){
                return true;
            }
        }
    }).map(customer => customer.name);
    return friendList;
};


var topThreeTags = function(array){
    var tagsArr = [];
        for(var i = 0; i < array.length; i++){
            var tags = array[i].tags;
            for(var j = 0; j < tags.length; j++){
                tagsArr.push(tags[j]);
            }
        }
        
        var tagsCount = _.reduce(tagsArr, function(count, tag){
            if(count[tag]){
                count[tag] += 1;
            }else{
                count[tag] = 1;
            }
            return count;
        }, {})
        
        var tagsCountArr = Object.entries(tagsCount);
        var sortedArr = tagsCountArr.sort((a, b) => b[1] - a[1]);
    
        var returnArr = [];
        returnArr.push(sortedArr[0][0]);
        returnArr.push(sortedArr[1][0]);
        returnArr.push(sortedArr[2][0]);
        return returnArr;
};

var genderCount = function(array){
    var genderCountObj = _.reduce(array, function(previous, current, index, array) {
        if(previous[current.gender] === undefined) {
            previous[current.gender] = 1;
        } else {
            previous[current.gender] += 1;
        }
        return previous;
    }, {});
    return genderCountObj;
};

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
