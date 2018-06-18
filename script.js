'use strict';

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

countSheep(3);