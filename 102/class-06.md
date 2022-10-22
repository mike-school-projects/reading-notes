# Class 6 Notes

## Javascript

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

Variables - 4 ways to declare

1. var x = 5;       variable in the function scope.  Old way.  Use let instead.
2. let x = 5;       variable in the block scope.  Cannot re-declare
3. const x = 5;     constant in the block scope.  Cannot re-declare
4. None.  Don't use.

Variable identifiers

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

Data types:

- Boolean
- Strings
- Numbers / integers

Lab notes:

replit.com - write JS code.  Use Node.js
Ctrl +: comments out code
use camelCase

[Link to home](https://mikeshen7.github.io/reading-notes)
