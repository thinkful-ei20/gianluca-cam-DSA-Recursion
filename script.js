

// console.log('Recursion');

/** Write a recursive function that counts how many sheep jumps over the fence.
 *
 *  Your program should take a number as an input. That number should be the number of sheep you have.
 * The function should display the number along with the message:
 * 		"Another sheep jump over the fence" until no more sheep are left.
 *
 *  Input: 3
 *  Output:
 *  3 - Another sheep jump over the fence
 *  2 - Another sheep jump over the fence
 *  1 - Another sheep jump over the fence
 */

function countSheep(num) {
	if (num === 0) {
		return;
	}
	console.log(` ${num} - Another sheep jumps over the fence`);
	countSheep(num - 1);
}

// countSheep(3);


/** Array Double
 *  Write a function that takes an array as input which contains an unknown set of numbers,
 *	and outputs an array with each input value doubled. Test your solution by trying a handful of different arrays. For example,
 *
 *  Input: [1, 2, 3]
 *  Output: [2, 4, 6]
 *
 */

const arrayDouble = arr => {
	if(arr.length === 0) return [];

	arr[0] = arr[0] * 2;

	return [arr[0], ...arrayDouble(arr.slice(1))];
};

// const arr = [1,2,3];
// console.log('Input: ', arr);
// console.log('Output: ', arrayDouble(arr));

/** Reverse String
 *  Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
 */

const reverseStr = str => {
	if (str === '') return '';
	// Extract part of a string, from the end using .substr(-1)
	// recusive call excluding the last letter of the string
	return str.substr(-1) + reverseStr(str.substr(0, str.length -1));
};

// console.log(reverseStr('banana'));

/** nth Triangular Number
 *  Calculates the nth triangular number. A triangular number counts the objects that can form an equilateral triangle.
 *  The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum
 *  of the n natural numbers from 1 to n.
 *
 *  This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45
 */


/**
  * 1   i=1  n=1
  * 3   i=2  n=3
  * 6   i=3  n=6
  * 10  i=4  n=10
  * 15  i=5  n=15
  */

const nthTriangularNumber = index => {
	if(index === 0) return 0;

	return index + nthTriangularNumber(index - 1);
};

// console.log(nthTriangularNumber(9));

/** String Splitter
 *  Split a string based upon a separator (similar to String.prototype.split);
 */


const split = (string, separator = undefined, limit = 0) => {
	console.log('string: ', string);
	if(separator === undefined || separator === null) return [];

	if(!string.length) {
		return [''];
	}

	let character = string[0];
	if(character === separator) {
		console.log('character === separator output: ', ['', ...split(string.substr(1), separator, limit)]);
		return ['', ...split(string.substr(1), separator, limit)];
	}

	let newArray = split(string.substr(1), separator, limit);
	newArray[0] = character + newArray[0];
	console.log('newArray ', newArray);
	return newArray;
};

// console.log(split('The milk has gone bad', 's'));

/** Binary Representation
 *  Write a recursive function that prints out the binary representation of a given number.
 *
 *  For example, the program should take 3 as an input and print 11 as output, or 25 as an
 *  input and print 11001 as an output.
 *  (Note that the binary representation of 0 should be 0).
 */

const binaryRepresentation = num => {

	if(num === 0) return '';

	let binaryNum = '' + Math.floor(num % 2);
	return binaryRepresentation(Math.floor(num/2)) + binaryNum;
};

// console.log(binaryRepresentation(25));


/**
 * Factorial
 * Write a recursive function that finds the factorial of a given number.
 * The factorial of a number can be found by multiplying that number by each number
 * between itself and one.
 *
 * The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120
 *
 */

const factorial = num => {
	if(num === 1) return 1;
	return num * factorial(num -1);
};

// console.log(factorial(5));

/** Fibonacci
 *
 * 	Write a recursive function that prints the fibonacci sequence of a given number.
 *  The fibonnaci sequence a series of numbers in which each number is the sum of
 *  the two preceding numbers. For example the 7th fibonacci number in a
 *  fibonaci sequence is 13. The sequence looks as follows: 1 1 2 3 5 8 13.
 *
 */

const INDEX = 7;
const fibStore = {};

const fibonacci = (index/*, branch*/) => {
	if(index <=1 ) {
		if(!fibStore.hasOwnProperty(index)) {
			fibStore[index] = index;
			//console.log(index, branch);
		}
		return index;
	}

	let a = fibonacci(index-2, 'a');
	let b = fibonacci(index-1, 'b');
	if(!fibStore.hasOwnProperty(index)) {
		fibStore[index] = a + b;
		//console.log(index, branch);
	}
	return a + b;
};

const printFib = () => {
	fibonacci(INDEX, 'a');
	Object.keys(fibStore).forEach(index => console.log( fibStore[index]));
};

// printFib();

/** Anagrams
 *
 * 	An anagram is any word or phrase that exactly reproduces the letters in another order.
 *  Write a function that creates an anagram (listing all the rearrangements of a word) of
 *  a given word. For example, if the user types east, the program should list all 24
 *  permutations, including eats, etas, teas, and non-words like tsae.
 *
 * */

const anagram = (prefix, remaining) => {

	// when we are out of remaining letters, print out the prefix (permutation/anagram)
	if(!remaining.length) {
		console.log(prefix);
		return;
	}

	// process remaining characters
	for (let i = 0; i < remaining.length; i++) {
		/**
		 * First layer...
		 * 	anagram( '' + 'A', '' + 'BCD');
		 *
		 * 		Second Layer...
		 *
		 * 		anagram( 'A' + 'B', '' + 'CD');
		 * 		anagram( 'A' + 'C', 'B' + 'D');
		 * 		anagram( 'A' + 'D', 'BC' + '');
		 *
		 * 					.
		 * 					.
		 * 					.
		 * 
		 * 	anagram( '' + 'B', 'A' + 'CD');
		 *
		 * 					.
		 * 					.
		 * 					.
		 *
		 * 	anagram( '' + 'C', 'AB' + 'D');
		 *
		 *					.
		 * 					.
		 * 					.
		 *
		 * 	anagram( '' + 'D', 'ABC' + '');
		 *
		 *					.
		 * 					.
		 * 					.
		 *
		 */

		anagram(prefix + remaining[i], remaining.substr(0, i) + remaining.substr(i + 1, remaining.length));
	}
};
const word = 'ABCD';
// console.log(anagram('', word));

/** Animal Hierarchy
 *
 *  Step through the code and find the input to the program, input to each recursive calls,
 *  output of each recursive calls and the output of the program. The purpose of this exercise
 *  is not for you to copy paste the code and find out the output but rather step through each line,
 *  analyze each step to understand how recursion works.
 *
 */

const animalHierarchy = [
	{id: 'Animals', parent: null},
	{id: 'Mammals', parent: 'Animals'},
	{id: 'Dogs', parent:'Mammals' },
	{id: 'Cats', parent:'Mammals' },
	{id: 'Golden Retriever', parent: 'Dogs'},
	{id: 'Husky', parent:'Dogs' },
	{id: 'Bengal', parent:'Cats' }
];

function traverse(animalHierarchy, parent) {
	let node = {};
	animalHierarchy.filter(item => {
		if(item.parent === parent){
			return true;
		}
	})
		.forEach(item => {
			node[item.id] = traverse(animalHierarchy, item.id);
		});
	return node;
}
console.log(
	JSON.stringify(
		traverse(animalHierarchy, null)
		, null, 2)
);

/** Organization Chart
 *
 * Write a recursive function that prints the following organization chart.
 * Your output should be as shown below with proper indentation to show the hierarchy.
 *
 *
 * Zuckerberg
 *  	Schroepfer
 * 			Bosworth
 *          	Steve
 *          	Kyle
 *          	Andra
 *      	Zhao
 *       		Richie
 *           	Sofia
 *           	Jen
 *   	Schrage
 *       	VanDyck
 *           	Sabrina
 *           	Michelle
 *           	Josh
 *       	Swain
 *           	Blanch
 *           	Tom
 *           	Joe
 *   	Sandberg
 *      	Goler
 *           	Eddie
 *           	Julie
 *          	Annie
 *      	Hernandez
 *           	Rowi
 *           	Inga
 *           	Morgan
 *      	Moissinac
 *           	Amy
 *           	Chuck
 *           	Vinni
 *      	Kelley
 *          	Eric
 *          	Ana
 *          	Wes
 */

const organizationChart = [
	{id: 'Zuckerberg', parent: null},

	{id: 'Schroepfer', parent: 'Zuckerberg'},

	{id: 'Bosworth', parent: 'Schroepfer' },
	{id: 'Steve', parent: 'Bosworth' },
	{id: 'Kyle', parent: 'Bosworth' },
	{id: 'Andra', parent: 'Bosworth'},

	{id: 'Zhao', parent: 'Schroepfer' },
	{id: 'Richie', parent: 'Zhao' },
	{id: 'Sofia', parent: 'Zhao' },
	{id: 'Jen', parent: 'Zhao'},

	{id: 'Schrage', parent: 'Zuckerberg'},

	{id: 'Vandyck', parent: 'Schrage' },
	{id: 'Sabrina', parent: 'Vandyck' },
	{id: 'Michelle', parent: 'Vandyck' },
	{id: 'Josh', parent: 'Vandyck'},

	{id: 'Swain', parent: 'Schrage' },
	{id: 'Blanch', parent: 'Swain' },
	{id: 'Tom', parent: 'Swain' },
	{id: 'Joe', parent: 'Swain'},

	{id: 'Sandberg', parent: 'Zuckerberg'},

	{id: 'Goler', parent: 'Sandberg' },
	{id: 'Sabrina', parent: 'Goler' },
	{id: 'Michelle', parent: 'Goler' },
	{id: 'Josh', parent: 'Goler'},

	{id: 'Hernandez', parent: 'Sandberg' },
	{id: 'Rowi', parent: 'Hernandez' },
	{id: 'Inga', parent: 'Hernandez' },
	{id: 'Morgan', parent: 'Hernandez'},

	{id: 'Moissinac', parent: 'Sandberg' },
	{id: 'Amy', parent: 'Moissinac' },
	{id: 'Chuck', parent: 'Moissinac' },
	{id: 'Vinni', parent: 'Moissinac'},

	{id: 'Kelley', parent: 'Sandberg' },
	{id: 'Eric', parent: 'Kelley' },
	{id: 'Ana', parent: 'Kelley' },
	{id: 'Wes', parent: 'Kelley'},
];


function orgTraverse(organizationChart, parent) {
	let node = {};
	organizationChart.filter(item => {
		if(item.parent === parent){
			return true;
		}
	})
		.forEach(item => {
			node[item.id] = orgTraverse(organizationChart, item.id);
		});
	return node;
}
console.log(
	JSON.stringify(
		orgTraverse(organizationChart, null)
		, null, 3)
);