# Class Notes

This is an important topic because we want to make our code more flexible and easier to use.

1. What are dunder methods in Python, and how do they allow for the customization of built-in behavior in classes? Provide an example of a common dunder method and its purpose.

Dunder is the double underscore.  They are special methods like __init__ that always runs on creation of the class.  Or __str__ that returns a string if you print the object.

```python
def __str__(self):
    return self.name
```

2. Explain the concept of an iterator in Python. How do you create a custom iterator using the iter() and next() methods, and why are they important for enabling iteration in a class?

An iterator allows to loop through a collection of data.  It's a way to use a special dunder method to implement an iterator method in a class.  

You can create a custom iterator by using dunder methods.

They are important because they provide a standardized, built-in method to loop through an element.  It simplifies code when using it.

3. What is a generator in Python, and how does it differ from a regular function? Illustrate your answer with an example of a generator function using the ‘yield’ keyword.

A generator creates values on the fly.  

It differs from a regular function in that it uses a yield instead of a return.

Example code: 

```python
def repeater(value):
    while True:
        yield value
```

4. Define decorators in Python and explain their primary use case. How can you create and apply a custom decorator to a function or method? Provide a simple example to demonstrate this concept.

Decorators are things used to identify special code and make it do something else.  It does this by wrapping a target object with another object that modifies it's behavior.

An example are the decorators used in our DSA pytest tests.  This is a built-in decorator in pytest to skip the following function / test.

```python
@pytest.mark.skip("TODO")
```


## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
