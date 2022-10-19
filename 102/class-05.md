# Class 5 Notes

## Reading Notes

CSS: Cascading Style Sheets
Used for document text styling

Basic syntax:
name-of-html-element {          Selector
    background-color: red       Property: Value
    color: black;
    margin: 10px;
    padding: 5px;
}

### External CSS

- HTML file includes a reference to the CSS in the head section.
- Example: `<link rel="stylesheet" href="mystyle.css">`
- Uses .css extension

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

[CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

## Lab notes
color.adobe.com/create/color-wheel
css-tricks.com/almanac

Get CSS file connected and test it

id for individual element
class for multiple elments

[Link to home](https://mikeshen7.github.io/reading-notes)
