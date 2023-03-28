# Class Notes

This is an important topic because we use lists all the time and we need to get better at handling / manipulating lists.

1. What is the basic syntax of Python list comprehension, and how does it differ from using a for loop to create a list? Provide an example of a list comprehension that squares the elements in a given list of integers.

Basic Syntax:

list_name = [_expression_ for _list_item_ in _list_] = [x for x in range(10)] = [0,1,2,3,4,5,6,7,8,9,10]

Loops and list comprehension can do the same thing, but list comprehension is way more efficient in terms of lines of code.

list_to_square = [1,2,3]

squared = [num*num for num in list_to_square]

2. What is a decorator in Python?

From the reading:
"A decorator is a function that takes another function and extends the behavior of the latter function without explicitly modifying it"

Or in other words, it's a when you have a variable that's a function passed in as a parameter of another function.

3. Explain the concept of decorators in Python. How do they work, and what are some common use cases for them? Provide an example of a simple decorator function from the reading.

Used when you set a function to a variable, and pass in that variable/function to a function.

If you can the function the variable is assigned to, it will modify the operation of the function.

Example of this would be for dependency injection.  If we take the dice roller example, we can create a variable called roller_type.  We can set roller_type to either random_roller or test_roller, and pass this into our dice game.  By changing the variable, we can switch between random and test rollers.

## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
