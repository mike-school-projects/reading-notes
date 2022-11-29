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

CSS Rule: comprises the entire thing

### CSS Selector

Element: `element-name`
ID:`#id-name` for individual element
Class: `.class-name` for multiple elments assigned a class
Universal: `*`
Descendant: `A B` selects all B inside of A
Element / Class AND combination: `element-name.class-name`
OR combination: `A,B`
Adjacent sibling: `A+B` selects all B that directly follows A
General sibling: `A ~ B`

### External CSS

From inside the html file, in head, add reference to external file:

```html
    <head>                                                          - header info that isn't shown
        <link rel="stylesheet" href="mystyle.css">                  - External CSS reference
    </head>
```

### Internal CSS

- Use if a single HTML file has unique style
- Add style elment to head section of HTML page
- Example:

```html
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
```

### Inline CSS

- Use to apply unique style to a single element
- Use style element in the HTML element itself
- Highest order precedence compared to external / inline.
- Example:

```html
<body>
<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>
</body>

```

## Resources

[CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
[CSS Tricks](https://css-tricks.com/almanac)
[CSS cheatsheet](https://overapi.com/css)
