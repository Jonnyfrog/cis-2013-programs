//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}


   
// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function ()

{
    //declares variables
    var i=0;  // sets the first number in the Fibonacci series to 0
	var j=1;  //sets the second number in the Fibonacci series to 1
	var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput="0, 1";//initialize the Fibonacci series output to include the first two numbers
    var intCount = "" //declares counter and sets it to empty
	 intCount=($("total_fib").value);  //gets user input from the DOM
	
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100

if (isNaN(intCount) || intCount<2 || intCount>100)
{
    alert("Uh Oh! You've submitted an invalid number! Try a number between 2 and 100");
    $("total_fib").value = "";
}

//main while loop that adds a set number of fibonacci numbers depending on the user input
else
{
while (intCount>2)
   {
    k=i+j;
    i=j;
    j=k;
    stringOutput=stringOutput+", "+k; //adds next number to output
    intCount=intCount-1; //increments the counter
   }


$("output").value = stringOutput;// Pushes solution back to Output through DOM
$("total_fib").value = "";

}
}

window.onload = function () 
{
    $("total_fib").value = "";  //resets the dom input upon loading
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}
