/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax=0, intMin=0, intRandom, intGuess=0, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/

intMin=parseInt(prompt("Please Enter A Minimum Number"));

while (intMin <=0 || isNaN(intMin))
{
    intMin=parseInt(prompt("Uh Oh! That's not a valid number! Try Again, and try to get it right this time."));
} 

/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/




intMax=parseInt(prompt("Please Enter a Maximum Number"));

while (intMax<intMin+2 || isNaN(intMax))
{
 intMax=parseInt(prompt("Yikes! Either that number is too low, or it's not a number at all. Try again!")); 
}

/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// set the loop counter

intCount=1;

//the following code gets the user's guess number and validates that it is in the guess area

intGuess=parseInt(prompt("Please enter your best guess"));

while (intGuess < intMin || intGuess > intMax || isNaN(intGuess))
{
    intGuess=parseInt(prompt("That number is outside of your guess area. Try Again."));
}

//the following code evaluates whether the guess number is above or below the actual number, and advises the guesser accordingly


while (intGuess != (intRandom))
{   
    if (intGuess < intRandom)
    {
        intGuess = parseInt(prompt("Too low! Try guessing a higher number."));   
    }
    else
    {
        intGuess = parseInt(prompt("Too high! Try guessing a lower number."));
    }
  intCount=intCount+1;
}

//the following code congratulates the user on a correct guess and tells them how many attempts it took


// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");
