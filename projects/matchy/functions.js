/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
    for(var i = 0; i < animals.length; i++){
        if(animals[i]["name"] === name){
            return animals[i];
        }
    }return null;
} 


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    for(var i = 0; i < animals.length; i++){
    if(animals[i]["name"] === name){
        return animals[i] = replacement;
    }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for(var i = 0; i < animals.length; i++){
    if(animals[i]["name"] === name){
        animals.splice(animals[i]);
    }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    var nameMatches = false; //create a boolean flag variable to test names
    for(var i = 0; i < animals.length; i++){ //loop through animals array
        if(animals[i].name === animal.name){ //if name equals animal obj name return true
            nameMatches = true;
            }
        }
        //if nameMatches is false & animalObj name & species length greater than 0
        if(nameMatches !== true && animal.name.length > 0 && animal.name.length >0){
            animals.push(animal); //push animalObj into animals arr
        }
    };


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
