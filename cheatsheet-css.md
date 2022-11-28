# CSS Cheatsheet

Used for document text styling

## Tools: use VS Code with live preview

## File format: mystyle.css

## Syntax

name-of-html-element {              Selector
    background-color: red           Property: Value
    color: black;
    margin: 10px;
    padding: 5px;
}

id for individual element
class for multiple elments

### External CSS

From inside the html file, in head, add reference to external file:

```html
    <!DOCTYPE html>                                                 - start with this to identify it has HTML document
    <html lang="en-US">                                             - <html> wraps the entire content.  AKA root element
    <head>                                                          - header info that isn't shown
        <meta charset="utf-8" />                                    - sets character set
        <meta name="viewport" content="width=device-width" />       - sets render width
        <title>My test page</title>                                 - sets title of page (what appears in browser)
        <link rel="stylesheet" href="mystyle.css">                  - External CSS reference
    </head>
    <body>                                                          - Content
        <img src="images/firefox-icon.png" alt="My test image" />
    </body>
    </html>
```

### Internal CSS

- Use if a single HTML file has unique style
- Add style elment to head section of HTML page
- Example:

```html
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>
```

### Inline CSS

- Use to apply unique style to a single element
- Use style element in the HTML element itself
- Example:

```html
<!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>

</body>
</html>
```

## Resources

[CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
[CSS Tricks](https://css-tricks.com/almanac)
