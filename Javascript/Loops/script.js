var todolist = [
	"cleanroom",
	"brushteeth",
	"exercise!",
	"learn javascript",
	"eat healthy"
];

var todolistLength = todolist.length;

// var counterOne = 10;

// while (counterOne > 0) {
// 	// statement
// 	console.log(counterOne);
// 	counterOne--;

// }


//do-while loop

// var counterTwo = 10
// do {
// 	console.log("do While",counterTwo);
// 	counterTwo--;

// } while(counterTwo > 0 );

// var counterOne = 10;
// while(counterOne > 10) {
// 	console.log("While",counterOne);
// 	counterOne--;
// }


for (var i = 0 ; i <todolistLength; i++) {
	console.log(todolist[i], i);
}

todolist.forEach(function(todo, i){
	console.log(todo, i);
})
