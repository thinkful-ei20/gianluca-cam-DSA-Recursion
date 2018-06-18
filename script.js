

// console.log('Recursion');

/*
Write a recursive function that counts how many sheep jumps over the fence. Your program should take a number as an input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jump over the fence" until no more sheep are left.

Input: 3
Output:
3 - Another sheep jump over the fence
2 - Another sheep jump over the fence
1 - Another sheep jump over the fence
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

/*
Reverse String
Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
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

console.log(nthTriangularNumber(9));

