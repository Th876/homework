//Arrays, Loops, and Conditional Reps

////////////////////////////////
// Easy Going 
//Write a for loop that will log the numbers 1 through 20.
////////////////////////////////

for(let i = 1; i < 21; i++) {
    console.log(i);
}


////////////////////////////////
// Get Even 
//Write a for loop that will log only the even numbers in 0 through 200.
//Hint: Think about the increment expression.
////////////////////////////////
for(let i = 0; i < 201; i+=2) {
    console.log(i);
}



////////////////////////////////
// Fizz Buzz
/*Write a javascript application that logs all numbers from 1 - 100.
If a number is divisible by 3 log "Fizz" instead of the number.
If a number is divisible by 5 log "Buzz" instead of the number.
If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.*/
////////////////////////////////

function fizzBuzz(num) {
    for(let i = 1; i < 101; i++) {
        if(i % 3 === 0 && i % 5 === 0) { 
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0){
            console.log("Buzz");   
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();

////////////////////////////////
// Wild Wild Life
////////////////////////////////


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////


////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////