# Class Notes

This is an important topic because need to be able to read files to take in data to manipulate it.

## Read and Write Files in Python

.. to move up one directory

to open / close a file:
file_variable = open('filename.txt')
file_variable.close()

to automatically close a file when done (recommended method):
with open('filename.txt') as file_variable
  code block here

file_variable.read(size=-1) // reads entire file
file_variable.readline(size=-1) // reads first line up to 'size' number of characters
file_variable.readlines() // reads the file and returns a list

## Exceptions in Python

Syntax error: incorrect statement

Exception error: syntactically correct code that results in an error

'raise' creates an exception:

raise Exception ('exception message)


assert ('linux' in sys.platform), "This code runs on Linux only."

This throws an assertion error if module is run on a machine other than linux


Try/except/else/finally block - similar to try/catch in JS

try: block to try and execute

except: block executes on exception

else: block executes if no exception

finally: block always executes, regardless of exceptions

## Class notes



## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
