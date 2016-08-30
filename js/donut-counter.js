//JS Donut Counter Lab
var guests
var donuts
guests = prompt("how many guests are there?")
donuts = prompt("how many donuts are there?")

guests = parseInt(guests)
donuts = parseInt(donuts)

var message

if (donuts < guests) {
	message = `Only ${donuts} donuts and ${guests} guests! Time to get more donuts!`; }
else {
	message = `Yeah! ${donuts} donuts is the perfect amount of donuts for ${guests} guests! Let's get super fat together!`;
	}

alert(message)

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
