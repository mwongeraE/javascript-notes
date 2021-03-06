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

#how a function works

How does a function work?

Let's break down exactly how a computer thinks when it sees the code for a function.

var functionName = function( ) {

// code code code

// code code code
 
 // (more lines of code)

};

The var keyword declares a variable named functionName.

The keyword function tells the computer that functionName is a function and not something else.

Parameters go in the parentheses. The computer will look out for it in the code block.

The code block is the reusable code that is between the curly brackets { }. Each line of code inside { } must end with a semi-colon.

The entire function ends with a semi-colon.

To use the function, we call the function by just typing the function's name, and putting a parameter value inside parentheses after it. The 

computer will run the reusable code with the specific parameter value substituted into the code.

#Return keyword

The return keyword simply gives the programmer back the value that comes out of the function. So the function runs, and when the return keyword is used, the function will immediately stop running and return the value.

example:

// Parameter is a number, and we do math with that parameter

var timesTwo = function(number) {

    return number * 2;
};

// Call timesTwo here!

var newNumber = timesTwo (8)

console.log(newNumber);

#Arrays:

a. store lists of data

b. can store different data types at the same time

c. are ordered so the position of each piece of data is fixed

example

var names = ["Mao","Gandhi","Mandela"];

var sizes = [4, 6, 3, 2, 1, 9];

var mixed = [34, "candy", "blue", 11];