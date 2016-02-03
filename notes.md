#Function syntax
A function takes in inputs, does something with them, and produces an output.

Here's an example of a function:

var sayHello = function(name) {

console.log('Hello ' + name);

};

First we declare a function using var, and then give it a name sayHello. The name should begin with a lowercase letter and the convention is 

to use lowerCamelCase where each word (except the first) begins with a capital letter.

Then we use the function keyword to tell the computer that you are making a function

The code in the parentheses is called a parameter. It's a placeholder word that we give a specific value when we call the function. Click 

"Stuck? Get a hint!" for more.

Then write your block of reusable code between { }. Every line of code in this block must end with a ;.

You can run this code by "calling" the function, like this:

sayHello("Emily");

Calling this function will print out Hello Emily.