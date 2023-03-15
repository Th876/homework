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
/*Wild Wild Life
Use the following arrays to answer the questions below 
(name,species ,age, hometown): You should be modifying 
the elements by accessing them. It is up to you which methods 
to use.
1) Plantee just had her birthday; change Plantee's array 
to reflect her being a year older.

2) Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

3) Give D'Art a second hometown by adding "Hawkins"

4) Porgee decides that Wolfy can't be named "Wolfy" anymore. 
Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
*/
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]


plantee[2] = 5001;
console.log(plantee);

wolfy[3] = "Gotham City";
console.log(wolfy);

dart.push("Hawkins");
console.log(dart);

wolfy.shift();
wolfy.unshift("Gameboy");
console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles

/*Yell at the Ninja Turtles
Create an array with the members of the ninja turtles 
(Donatello, Leonardo, Raphael, Michaelangelo)
Use a for of loop(not a typo - try it out! Try a for ofloop) 
to call toUpperCase()on each of them and print out the result.*/
////////////////////////////////

const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (turtle of ninjaTurtles) {
    console.log(turtle.toUpperCase()); //print each element in uppercase
}

////////////////////////////////
// Methods, Revisited

/* Here is a list of favMovies:
Console log: the index of Titanic
Do the following and console.log the final results 
(I have included some thought questions, you don't have to write out an answer for those marked as such):
Note: if you have to add to the array, feel free to add any movie you'd like

use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
Use the method pop
push"Guardians of the Galaxy"
Reverse the array
Use the shiftmethod
unshift- what does it return?
splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
slicethe last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
store the value of your slicein a variable, console.log it - Thought question: what is going on here?
console.log your final results
After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?
*/
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 
'Howl\'s Moving Castle', 'Django Unchained', 
'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 
'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 
'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 
'Fast and Furious'];

console.log(favMovies.indexOf('Titanic'));

console.log(favMovies.sort()); 
console.log(favMovies);
//Yes, it permanently placed the items in alphabetical order 

console.log(favMovies.pop()); //removed the last movie from the array

favMovies.push("Guardians of the Galaxy");
console.log(favMovies);

console.log(favMovies.reverse()); //it makes the first movies go to the end 
//and the last movies to the beginning

favMovies.shift();
console.log(favMovies); //this removes Guardians of the Galaxy from the beginning

favMovies.unshift();
console.log(favMovies); 
//doesn't add anything because there's nothing between the parentheses

console.log(favMovies.indexOf("Django Unchained"));
favMovies.splice(14, 1);//remove Django
favMovies.splice(14, 0, "Avatar"); //add Avatar
console.log(favMovies);
//yes, it permanently altered the array

//first find the array length
console.log(favMovies.length); //Output: 18

//get the first half of the array
console.log(favMovies.slice(0, 9)); //why is it 9 and not 10 since the end is not included?
console.log(favMovies); //it didn't permanently alter the array

let firstHalfMovies = favMovies.slice(0, 9);
console.log(firstHalfMovies);
//it stores the first half

console.log(firstHalfMovies.indexOf("Fast and Furious"));
//it returns -1

//no because these methods were designed to work with the 
//mutation of arrays



////////////////////////////////
// Where is Waldo
/*With the following multi-dimensional array
Remove Eggbert (hint look at the slice/splice method(s))
Change "Neff" to "No One"
Access and console.log "Waldo"
*/
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];


whereIsWaldo.splice(1,1);
console.log(whereIsWaldo);

whereIsWaldo.splice(2,2);
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);

////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////