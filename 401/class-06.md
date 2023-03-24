# Class Notes

This is an important topic because random number generators are used all the time.  Testing is important to reduce risk.

1. How can the random module be utilized in Python to generate random numbers or make selections from a list, and what are some common functions available within the module?
import random
value = list[random.randint(0,len(list))]

Common fuctions:

random.randint(low,high) - integer exclusive of low, inclusive of high

random.random() - number between 0 and 1

random.choice(['a', 'b', 'c'])

random.randrange(start, stop, step)

from random import shuffle

x [1,2,3,4,5]

shuffle(list)

2. In the context of software development, what is risk analysis, and what are the key steps involved in conducting a risk analysis for a software project?

Process of identifying the risks, assigning level of risk.

Risk assessment - look at 3 things:
- Effect
- Cause
- Likelihood

3. What is test coverage and why is it an important (or potentially misleading) metric in software testing?

Test coverage is the % of code covered by the testing suite.  

Big coverage numbers don't mean good tests.  Need to consider quality of test.

4. What is Big O notation, and how is it used to describe the performance of an algorithm? Give an example of an everyday task (not software related) that demonstrates O(n) time complexity.

Big O is used to describe the relationship between the data input size and the performance of the algorithm, in terms of both time and space performance.

Grocery shopping: as my list grows, the time it takes to buy the items grows proportionally.

## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
