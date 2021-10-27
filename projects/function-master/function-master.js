//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
var newArr = [];
for(var key in object){
    newArr.push(object[key]);
}

return newArr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
        return Object.keys(object).join(" ");
}
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arr1 = [];
    for(var key in object){
        if(typeof object[key] === "string"){
            arr1.push(object[key]);
        }
        
    }
return arr1.join(" ");
}  




//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return "array";
    }else if(typeof collection === 'object'){
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
      var stringsArr = string.split(" ");
            for (var i = 0; i < stringsArr.length; i++){
                stringsArr[i] = stringsArr[i][0].toUpperCase() + stringsArr[i].substr(1);
            }

            
            return stringsArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return `Welcome ${capitalizeWord(object.name)}!`;
//return "Welcome" + object.name[0].toUpperCase() + object.name.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object){
    return `${capitalizeWord(object.name)} is a ${capitalizeWord(object.species)}`;

}


//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    
    
        if(object.noises && object.noises.length !== 0){
            
            return object.noises.join(" ");
        }else{
            return "there are no noises";
        }
    }


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    return string.includes(word);
   
} 



//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(object.friends === undefined)return false;
    if(object.friends.includes(name)) return true;
    return false;  
}
// if the object with a friends array doesn't exist, return false
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// var data = [
//     {name: "Jimmy", friends:["Sara", "Liza"]},
//     {name: "Bob", friends:[]},
//     {name: "Liza", friends: ["Jimmy"]},
//     {name: "Sara", friends: ["Jimmy"]}
//   ];
function nonFriends(name, array) {
    // var notFriends = [];
    // for(var i = 0; i <array.length; i++){
    //     var currentName = array[i].name;
    //     console.log(currentName);
    //     if(currentName === name){
    //         var nameIndex = i;
    //     }
    //     if(array[nameIndex].friends.length === 0) {
    //         return [];
    //     }
    //     else if(!array[nameIndex].friends.includes(currentName) && currentName !== name){
    //         notFriends.push(currentName);
    //     }
    // }                                                           
    // return notFriends;
    var arrFriends = name.friends;// declare array that equals name parameter and friends properties
    //loop thru array
    for(var i = 0; i < arrFriends.length; i++){
        if(name !== array[i].name){
           if(array[I].includes(name) === false){
            arrFriends.push(array[i]);
           }
;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // object = Object.hasOwnProperty(key);//check existance of key and add it if need be
    // object["key"] = value;//add new value to key
    
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
// for(var i = 0; i < object.length; i++){
//     for(var j = 0; j < array.length; i++){
//         if(object[i] === array[j]{
//             remove object[i];
//         })
//     }
// }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}