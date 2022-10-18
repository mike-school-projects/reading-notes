# Class 4 Notes

## Helpful commands

- `rm -rf [folder name]` deletes folder.  No undo!!!
- Right-click to paste into WSL terminal

## Wireframe and Design

Wirefram - basic layout of app / website.
Basic steps:

1. Research
    1. Who is the audience
    2. Requirements
    3. Use cases
2. Prepare research for quick reference
3. Map out user flow
4. Draft / sketch wireframe (big picture, not details)
5. Add details
    1. Usability conventions
    2. Simple, instructional working
    3. Trust-building elements
    4. Tooltips
6. Build prototypes

Tips

1. Clarity
2. Confidence - build user confidence
3. Simplicity

## HTML basics

HTML should have content and structure.
CSS should have the styling.
Attributes go into opening tag

Elements

- Example: `<p> content </p>`
- Contains Opening tag and Closing tag `<p>` and `</p>`
- Contains Content in the middle
- May have attributes: `<p class="editor-note">Content </p>`

Can nest elements `<p>My cat is <strong>very</strong> grumpy.</p>`

- `<strong> content </strong>` is nested inside

Void elements (aka self-closing)

- Example: `<img src="images/firefox-icon.png" alt="My test image" />`
- Does not have a closing `</img>` - not required in this case

HTML document structure

```html
    <!DOCTYPE html>                                                 - start with this to identify it has HTML document
    <html lang="en-US">                                             - <html> wraps the entire content.  AKA root element
    <head>                                                          - header info that isn't shown
        <meta charset="utf-8" />                                    - sets character set
        <meta name="viewport" content="width=device-width" />       - sets render width
        <title>My test page</title>                                 - sets title of page (what appears in browser)
    </head>
    <body>                                                          - Content
        <img src="images/firefox-icon.png" alt="My test image" />
    </body>
    </html>
```

Common Elements

- Comment: `<!-- content -->`
- Headings: `<h1> content </h1>`
- Paragraph: `<p> stuf </p>`
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

## Semantics

Refers to meaning of the element

## Lab notes

websites:
miro.com
invision.com
loremipsum.io/generator - random text generator
betterplaceholder.com - placeholder images

Create wireframe
Create index.html in hello-world
Add DOCTYPE
`<p>&copy; text</p>` adds copyright text

[Link to home](https://mikeshen7.github.io/reading-notes)
