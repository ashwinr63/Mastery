// scope

// function bb(){
// 	var a = "hello";
// }

// Root Scope

// var fun = 5;

// function funFunction() {
// 	//child scope
// 	var fun = "hello";
// 	console.log(fun);
// }

// function funnerFunction() {
// 	//child scope
// 	var fun = "Bye";
// 	console.log(fun);
// }

// function funnestFunction() {
// 	//child scope
// 	var fun = "AHHHHHHHA";
// 	console.log(fun);
// }

// console.log(fun);

// #1
// function q1() {
// 	var a = 5;
// 	if(a > 1) {
// 		a = 3;
// 	}
// 	alert(a);
// }

// // #2
// var a = 2 ;
// function q2() {
// 	a = 5;
// }


// Ternary Operator and operatoions.

// function isUserValid(bool) {
// 	return bool;
// }

// var answer = isUserValid(true) ? "You are Welcome" : "Sorry Denied"

// var automatcher = "Your Account # is " + (isUserValid(false) ? "1234" : "Not Available");

// function condition() {
// 	if(isUserValid(true)) {
// 		return "Please Enter";
// 	} else {
// 		return "Sorry Not Permitted";
// 	}
// }

// var answer2 = condtion();


// Switch 

function moveCommand(direction) {
	var whatHappens;
	switch (direction) {
		case "forward":
			whatHappens = "You Met a Monster";
			break;
		case "Backward":
			whatHappens = "Arrived at home";
			break;
		case "Left":
			whatHappens = "Found water in Pond";
			break;
		case "Right":
			whatHappens = "Steal from a bank";
			break;			
			default:
				whatHappens = "Please enter a Valid Direction";

	}	
	return whatHappens;
 }