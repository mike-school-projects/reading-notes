# HTML Cheatsheet

Uses: web pages

## Tools: use VS Code

## File format: index.html

## HTML document structure

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
        <header></header>

        <main>
        <img src="images/firefox-icon.png" alt="My test image" />
        </main>

        <footer></footer>
    </body>
    </html>
```

## Syntax

- Comment: `<!-- content -->`
- Headings: `<h1> content </h1>`
- Paragraph: `<p> stuff </p>`
- Unordered list

```html
    <ul>
        <li> content 1 </li>
        <li> content 2 </li>
        <li> content 3 </li>
        <li> content 4 </li>
    </ul>
```

- Ordered lists `<ol>`
- Links
    1. Add anchor         `<a>Link text</a>`
    2. Add href attribute `<a href="https://www.someplace.com">Link Text</a>`
- [List of elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

`<p>&copy; text</p>` adds copyright text

## Document Object Model

Converts webpage to object that can be read / manipulated by JS.
Steps for DOM manipulation

1. Get window into your HTML or into the DOM
    a. let section = document.getElementByID('my-section');
    b. let body = document.querySelector('body');
2. Create elements
    a. const h2Elmeent = document.createElement('h2');
    b. `<h2></h2>`
3. Give context if necessary
    a. h2Element.textContent = 'Hey! I\'m an h2!'
    b. `<h2>Hey I'm an h2!</h2>`
4. Add it to the DOM
    a. parentElement.appendChild(child)
    b. section.appendChild(h2Element);

## Resources

[Miro - live demo](https://miro.com)
[Invision - live demo](http://invision.com)
[Random text generator](https://loremipsum.io/generator)
[Placeholder images](https://betterplaceholder.com)
