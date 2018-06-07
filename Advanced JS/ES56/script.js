// let + const

// const player = 'bobby';
// let exp = 100;
// var wizardLevel = false;

// if(exp > 90) {
// 	var wizardLevel = true;
// //	console.log('inside', wizardLevel);
// }

// //console.log('outside', wizardLevel);

// const obj = {
// 	player: "Bobby",
// 	experience: 100,
// 	wizardLevel: false;
// }

// Destructuring

// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

// const { player,experience} = obj;

// let {wizardLevel} = obj;

// const name = 'Jon Snow';

// const obj = {
// 	[name] : 'hello',
// 	[1 + 1]: 'hihi'
// }

// const a = "Stevens";
// const b = true;
// const c = {};

// const obj = {a}

// Template Strings 

// const greetings 


// Advanced Functions 

// const first = () => {
// 	const greet = 'Hi';
// 	const second = () => {
// 		alert (greet);
// 	}
// 	return second;
// }

// const newFunc = first();
// newFunc();

// // const newFunc = const second = () => {}

// //closures - a function ran , function executed . Never will it execute again.
// // but its going to remember that thaere are references to those variables so that the child scope always has across the paret scope.

// //Currying

// const multiply = (a, b) => a * b;
// const curryMultiply = (a) => (b) => a * b;
// // a = 3 , b = 4 ; process of converting a function into multiple arguments 
// // curryMultiply(3);
// const multiplyBy5 = curryMultiply(5);


// //Compose 

// const compose = (f, g) => (a) => f(g(a));

// const sum = (num) => num + 1;

// compose(sum, sum)(5);


// Advanced array

// const array = [1,3,5,7,10];

// const double = []

// const newArr = array.forEach((num) => {
// 	double.push(num * 2);

// })

// console.log(newArr);


// Map, Filter , reduce

// const newArr = array.map((num) => {
// 	return num * 2;
// })