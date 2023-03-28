# Class Notes

This is an important topic because...

1. Explain the concept of variable scope in Python and describe the difference between local and global scope. Provide an example illustrating the usage of both.

Local scope variables are declared in a function and can be only be seen from within that function.
Global scope variables are decalred outside of a function (or by using global keyword) and can be seen from anywhere within the module.

```
# outside of function
global_variable = 0

def this_function():
    # inside of function
    local_variable = 0
```

2. How do the global and nonlocal keywords work in Python, and in what situations might you use them?

global keyword forces the function to reference the global variable.

nonlocal keyword basically does the opposite, used in nested loops to reference the outer variable.

3. In your own words, describe the purpose and importance of Big O notation in the context of algorithm analysis.

Big O tells us how awesome of a programmer you are.  

It tells you how efficiently your algorithm is in terms of both speed and how much memory it takes.  

It describes it in terms of the relationship of speed/space to size of input dataset.

4. Based on the Rolling Dice Example, explain how you would simulate a dice roll using Python. Describe how you would use code to calculate the probability of rolling a specific number (e.g., the probability of rolling a 6) over a large number of trials.

Write a function using randomint from 1-6.

You can take in an int as arg for the number of dice to roll.

For probability, you can _estimate_ the results by simulating 10,000 dice rolls and saving the results.

Or you could just take 1 / 6 = 16.7%...

## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
