/**functions:
 * 1. A function is similar to a procedure—a set of statements that performs a task or calculates a value
 *    for a procedure to qualify as a function
 * 2. it should also take some input and return an output where there is some obvious relationship 
 *    between the input and the output. 
 * 3. To use a function, you must define it somewhere in the scope from which you wish to call it.
 * 
 ***  A function definition (also called a function declaration, or function statement) consists of 
 * a.  the function keyword, followed by:
 * b.  The name of the function.
 * c.  A list of parameters to the function, enclosed in parentheses and separated by commas.
 * d.  the code block with statements that define the function (that say what the function does), enclosed in curly brackets, { , , }.
 *     ...For example, the following code defines a simple function named square
 */
 function square(number) {
    return number * number;
  }
  /**  ^^^^^^^^^^^^^^^^^^^
   * The function named square takes one parameter, called number. 
   * The function has one statement that says to 
   * return the parameter of the function (number) multiplied by itself. 
   * The statement return specifies the value returned by the function:
   */

  /**
   *  Defining it names the function and specifies what to do when the function is called.
   *  Calling the function actually performs the actions with the actions it supposed to do.  
   *  if you define the function square, you could call it as follows:
   */
   square(4); // 4 * 4 = 16 => result would be 16
   console.log(square(4)); // => prints 16

  /**
   * a function can be anonymous (without a function name); it does not have to have a name. 
   * the function square could have been defined as:
   */
   const square = function(number) { 
       return number * number 
    }
   var x = square(4) // x gets the value 16
   /**
    * Function expressions are also good when passing a function as an argument to another function. 
    * The next example shows a map function that receives a function as first argument and an array as second argument
    */
    function map(func, array) {
        let result = []; // Create a new Array
        for (var i = 0; i <= array.length; i++) // itterate through the passed in array with a for loop
          result.push(array[i]); // each index value at each itteration gets pushed into the new result array
        return result;
      }
