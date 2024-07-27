# LearningJavaScript
Welcome to my JavaScript Learning Repository! This repository will serve as a dedicated space where I document and share my journey as I begin to learn JavaScript. As I progress through various tutorials, projects, and exercises, I will be using this repository to track my accomplishments, challenges, and discoveries. Here, you will find code samples, project notes, and reflections on my learning experiences. I hope to build a comprehensive record of my growth and development in JavaScript, and this repository will be a valuable resource for both my future reference and for anyone interested in following my learning path.

July 26 2024 : First day of learning JS, passed basic JS course on an app called Encode in roughly 1h. 

Now starting to code my first mini challenge, fizzbuzz (find it under the name FizzBuzz.js): The FizzBuzz algorithm is a classic programming challenge used in interviews and coding exercises. The goal is to write a program that prints a sequence of numbers with specific substitutions based on divisibility rules. Here’s a breakdown of the FizzBuzz algorithm:
-Print numbers from 1 to 100 (or another range) with the following rules:
-For multiples of 3, print "Fizz" instead of the number.
-For multiples of 5, print "Buzz" instead of the number.
-For multiples of both 3 and 5, print "FizzBuzz" instead of the number.
-For all other numbers, print the number itself.

July 27 2024 : I tackled two challenges: implementing binary search without recursion and implementing it with recursion (find both codes in BinarySearch.js). Here is an overview of my experience.

•Binary Search Without Recursion
In this challenge, I implemented a binary search algorithm that iteratively finds the index of a given element in a sorted array. This method does not use recursion and relies on a while loop to repeatedly divide the search range until the target element is found or the range is exhausted.
Discoveries:
- Math.floor: I learned how to use `Math.floor` to calculate the midpoint index by taking the floor of the average of the start and end indices. This is crucial to ensure the midpoint is an integer.

•Binary Search With Recursion
For the second challenge, I implemented a binary search algorithm using recursion. This recursive approach continuously narrows down the search range by calling the function itself with updated indices based on the midpoint comparison.
Discoveries:
- Recursion in JavaScript: This was my first time testing recursion in JavaScript. It was fascinating to see how a function could call itself with new parameters to achieve the same goal as the iterative method.
- Return null: I used `return null` to handle cases where the input indices are out of bounds or the search range is invalid, providing a clear indication of an unsuccessful search.


How both code work : 

Here is a brief description of how the non-recursive binary search works:
1. Initialize ind_start to 0 and ind_end to the last index of the array.
2. Loop while ind_start is less than or equal to ind_end.
3. Calculate the midpoint ind_mid.
4. If the midpoint element matches the target, return ind_mid.
5. If the midpoint element is less than the target, move the start index to ind_mid + 1.
6. If the midpoint element is greater than the target, move the end index to ind_mid - 1.
7. If the loop exits without finding the target, return -1.

Here is a brief description of how the recursive binary search works:
1. Check if `ind_start` or `ind_end` are out of bounds. If so, print an error and return `null`.
2. If `ind_start` is greater than `ind_end`, return `null` to indicate the target is not found.
3. Calculate the midpoint `m`.
4. If the midpoint element matches the target, return `m`.
5. If the midpoint element is less than the target, recursively search the right half of the array.
6. If the midpoint element is greater than the target, recursively search the left half of the array.



Third challenge :  Game guess the number with selectable number of tries, 