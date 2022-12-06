# JavaScript Cheatsheet

Uses: dynamic stuff inside web pages

## File format: *.js

## Basic info

3 parts:

1. The language itself.
2. DOM SPI - how the language can interact with various parts of the web page
3. Server API provided by Node.js or other server-side systems

Can include JS code directly inside HTML file using `<script></script>` tags, or
Can call external JS file (recommended) using `<script src="filename"></script>`

Used to interact with webpages.  Examples:

```html
<script>                                opening tag for JS
 
var name = prompt("Your name:", "");    prompt for input
document.write("Hello ", name);         writes output to webpage
 
</script>                               closing tag for JS
```

```html
<script>
 
if (confirm("Shall I print Hello World?")) {    confirm: yes/no prompt that returns true/false
    document.write("Hello World");
} else {
    document.write("OK, I won't print it.");
}
 
</script>
```

## Variables - 4 ways to declare

1. var x = 5;       variable in the function scope.  Old way.  Use let instead.
2. let x = 5;       variable in the block scope.  Cannot re-declare
3. const x = 5;     constant in the block scope.  Cannot re-declare
4. None.  Don't use.

### Variable identifiers

- Can contain letters, digits, unnderscores, dollar signs
- Must begin with letter
- Case sensitive
- Can't use reserved words

Special characters:

Dollar sign treated as a letter.  By convention, used as alias to main function in JS library
Underscore treated as a letter.  By convention, used as alias for private (hidden) variables
Equals sign

- One: assignment
- Two: sort-of equals
- Three: strictly equals

## Data types

- Boolean
- Strings
- Numbers / integers
- Truthy / Falsey
  -- 0 is the only falsey value.  All other numbers are truthy.
  -- empty string is the only falsey value.  All other strings are truthy.

## Operators: lots of different types

- Arithmetic (+, -, *, **, /, %, ++, --)
- Assignment (=, +=, -=, *=, /=, %=, **=)
- Comparison (==, ===, !=, !==, >, <, >=, <=, ?)     Use STRICT comparison
- Logical (&&, ||, !)
- Type (typeof, instanceof)
- Bitwise operators (&, |, ~, ^, <<, >>, >>>)

## Functions: re-usable block of code that can be invoked

Example:

```javascript
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

Functions can return a value.
Variables decleared inside functions are local variables - can only be accessed by the function.

## Loops

Use FOR loop when you know how many loops you want.
for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement

Use WHILE if you don't know how many loops you want.
while (condition)
  statement

do
  statement
while (condition);

## Syntax

add `'use strict';` at the beginning
Use ' instead of " for string
Use ; at end of statements
use camelCase
Ctrl +: comments out code
Add internal JS to end of html. Or add external JS reference at end.

Template literals: Use string output with variables inside.  **MUST USE `, not '**
prompt(`My name is ${variableName})
Compare to string interpolation:
prompt('My name is ' + varaibleName)

## Objects

const person = {
  name: ["Bob", "Smith"],
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
};

person.name would return ["Bob", "Smith"]
person.bio() would call the bio function within person.

### Object within object

const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  // …
};

person.name.first would return "Bob"

### Functions inside of objects

``` JS
const person = {
  first: "Bob",
  last: "Smith",
  myFunction: function(){     // use keyword fuction() to indicate it's a function.
      console.log('Hi');
    },
  }
  ```

To call:
person.myFunction();  // use parenthesis to call the function.

### Bracket notation

person["age"]; is the same as person.age
Use this when accessing info via varaible (like function call)

### Can create new properties

person.eyes = 'hazel';      // If eyes didn't exist before, you can create it just by referencing it.
person.["eyes"] = 'hazel';  // Alternate method with bracket notation

### Can use variable to refer to itself using keyword of: this

In an object - refers to the object you are in

const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);   // this.name = person1.name
  },
};

### Constructors: function that creates new objects

function Person(name) {                     // creates function called "Salva"
  this.name = name;                         // Salva.name = Salva
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);   // Hi! I'm ${Salva.name}.   or Hi! I'm Salva.
  };
}

const salva = new Person("Salva");   // calls function `Person` as a constructor using keyword of new
salva.name;                          // uses Salva as variable.  replaces `this` with `Salva` in the function
salva.introduceSelf();               // executes introducesSelf method on salva

## Resources

[Replit - live demo](https://replit.com)  Use Node.js template
