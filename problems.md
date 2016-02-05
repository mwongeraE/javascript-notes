#problem1

You are a creature of habit. Every week you buy 5 oranges. But orange prices keep changing!

You want to declare a function that calculates the cost of buying 5 oranges.
You then want to calculate the cost of the 5 all together.
Write a function that does this called orangeCost().
It should take a parameter that is the cost of an orange, and multiply it by 5.
It should log the result of the multiplication to the console.
Call the function where oranges each cost 5 dollars.


#solution1
var orangeCost = function (cost){

    console.log(cost * 5);
};

orangeCost (5);

#solution2

var orangeCost = function(price){

    var val = price*5;
    
    console.log(val);
};

orangeCost(7);

#problem2

// Define quarter here.

var quarter = function(number){

    return number/4 ;
};


//Call the function inside the if statement's condition (and put in a parameter value!) such that "The statement is true" is printed to the console.

if (quarter(36) % 3 === 0 ) 

//We want quarter(some number) that when divided by 3 has remainder 0.

{

  console.log("The statement is true");
  
} else {

  console.log("The statement is false");
  
}

#Problem3

Write a function called perimeterBox that returns the perimeter of a rectangle.

#solution3

var perimeterBox = function (length, width){
    
    return length + length + width + width ;
    
};
perimeterBox (5, 8);

#Global vs Local Variables

Scope. Scope can be global or local.

Variables defined outside a function are accessible anywhere once they have been declared. They are called global variables and their scope is global.

For example:

var globalVar = "hello";

var foo = function() {

    console.log(globalVar);  // prints "hello"
}

The variable globalVar can be accessed anywhere, even inside the function foo.

Variables defined inside a function are local variables. They cannot be accessed outside of that function.

For example:

var bar = function() {

    var localVar = "howdy";
}

console.log(localVar);  // error

The variable localVar only exists inside the function bar. Trying to print localVar outside the function gives a error.

#rock, paper and scissors game

var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();

if (computerChoice < 0.34) {

	computerChoice = "rock";
    
} else if(computerChoice <= 0.67) {

	computerChoice = "paper";
    
} else {

	computerChoice = "scissors";
    
} console.log("Computer: " + computerChoice);

var compare = function (choice1,choice2) {

if (choice1 === choice2) {
    
    return "The result is a tie";
}
else if(choice1 === "rock") {
    
    if(choice2 === "scissors"){
        
        return "rock wins";
    }
    else{
        return "paper wins";
        }
}
else if(choice1 === "paper") {
    
    if(choice2 === "rock"){
        
        return "paper wins";
    }
    else{
        return "scissors wins";
        }
}
else if(choice1 === "scissors") {
    
    if(choice2 === "rock"){
        
        return "rock wins";
    }
    
    else{
    
        return "scissors wins";
        
        }
}
};
console.log (compare(userChoice,computerChoice));

#write a for loop that gets the computer to count down from 100 until 0 by 5. This time, make sure not to print 0.

for (var i = 100 ; i > 0; i-=5) {

console.log(i);

}

#Arrays

var names = ["Melody", "jamal", "phill", "NYC","Nairobi"];

for (var i = 0; i < names.length; i++) {

    console.log("I know someone called " + names[i]);
}
