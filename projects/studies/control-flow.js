/**control flow:
 * 1. Control flow is the order in which statements are executed in a program. 
 * 2. The default control flow is for statements to be read and executed in order
 *      from left-to-right, top-to-bottom in the code.
 * 3. certain conditional statements, like if/else-if/else and switch statements, can alter the flow from its default path. 
 */
 if (field==empty) {
    promptUser();
} else {
    submitForm();
}
//For example, the above excerpt might be inside a function that runs when the user clicks 
//the Submit button for the form. 

var x =1;
if(x === 1) {
    return true;  //returns true and code has compleated its task
}else{
    return false;
}
//in the above example, the flow stops at the first if condition and doesnt need to continue
//because the first condition hasbeen met