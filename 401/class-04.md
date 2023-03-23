# Class Notes

This is an important topic because we need to use objects and classes in programming.  And testing coverage is important.

## Classes and Objects

Classes - templates to create objects

Objects - combines functions and variables into one object

Functions - similar to JS methods

`__init__` is a special function that is called when the object is first created.  Use this to initialize variables

## Thinking Recursively

Divide into base and recursive case.

Base case - easy to solve, ends recursion.

Recursive case - repetitive action

Be aware of state: can use global state to manage data

Can use cache to store results of recursion to make it more efficient

## Pytest Fixtures and Coverage

Fixtures: function that runs before each test, used to input in data for the test

Can set the scope for the fixture so that it is available throughout the file

Coverage: how much of the code that is tested.  

`pip install pytest-cov` to install

`pytest --cov=myproj tests/` to run


## Things I want to know more about

Pytest: Parametrized tests

[Link to home](https://mikeshen7.github.io/reading-notes)
