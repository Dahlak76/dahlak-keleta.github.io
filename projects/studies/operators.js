/**
 * operators
 * operators act on our data, like assign them or compare them or include them in math operations
 * they are..
 */
 /* 1. assignment operators- =, +=, -=, *=, /=, %=, **=
 * = assigns the left opperand to the right, all the others are compound assignment operators 
 *   that are shorthand for the operations listed
 */
x = y // => assigns the value of y to x
x += y // => x = x + y
/* 2. comparison operators- ===, !==, >=, <=, <, >
* comparison operator compares its operands and returns a logical value based 
* on whether the comparison is true
*/
1 === 1 // 1 is strictly equal to 1. => prints true
2 !== 1 // 2 is not equal to 1. => prints true
1 >= 2 // i is not grater than or equal to 2. => prints false
/* 3. logical operators &&(both conditions have to be true) ||(only one of the conditions have to be true) !(not operator, used to find if something is not whats declared)
* Logical operators are typically used with Boolean (logical) values; when they are, they return 
* a Boolean value. However, the && and || operators actually return the value of one of the specified operands
*/
x = 1;
y = 2;
if(x === 1 || y === 3){
    return true;        // returns true because x = 1 even though y doesnt = 3 
}
/* 4. arithmetic operators- +, -, *, /
* An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value
*/
1 + 1 // adds 1 to 1