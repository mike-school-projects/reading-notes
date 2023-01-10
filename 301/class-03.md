# Class 3 Notes

This is an important topic because...

## Reading Notes

React Docs - lists and keys

1. What does .map() return?  A new array after performing a function on each element of the array.
2. If I want to loop through an array and display each value in JSX, how do I do that in React?  
Create array that includes html elements
Add array to ul element

3. Each list item needs a unique ____.  Key
4. What is the purpose of a key?  Helps React keep track of each item to see fi it has changed

The Spread Operator

1. What is the spread operator?  ... - it looks inside the array and passes the data inside the array
2. List 4 things that the spread operator can do.  Separates array into separate arguments, copying an array, adding to state, combining objects
3. Give an example of using the spread operator to combine two arrays.
let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [...array1, ...array2]; // [1,2,3,4,5,6]

4. Give an example of using the spread operator to add a new item to an array.
let array1 = [1,2,3];
let array3 = [...array1, 4,5,6]; // [1,2,3,4,5,6]

5. Give an example of using the spread operator to combine two objects into one.
let object1 = {name: 'name', shape: 'round'};
let object2 = {color: 'blue'};
let object3 = {...object1, ...object2};

How to Pass Functions Between Components

1. In the video, what is the first step that the developer does to pass functions between components? Create the function where the state is to be changed
2. In your own words, what does the increment function do?  Iterates through people array.  If name matches what was passed in, add 1 to count.  Map returns the function and sets the state of people to the return of map.
3. How can you pass a method from a parent component into a child component?  Pass the method as a prop
4. How does the child component invoke a method that was passed to it from a parent component?  this.props.increment(this.props.name)

## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
