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
