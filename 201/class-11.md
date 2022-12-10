# Class 11 notes

This is important because all web pages need audio and video these days, so I need to learn this.

Video and Audio Content

1. Explain how the ability to use video and audio on the web has evolved since the early 2000s.  It used to use plugins like flash / silverlight.  Now it uses HTML elements with JavaScript to control it.
2. Describe the use of the src and controls attributes in the `<video>` element.  src - path to video file.  controls - uses browsers built-in control interface to play.
3. Why is it important to have fallback content inside the `<video>` element?  For backward compatibility in case older browsers don't support it.
4. Write a very short story where `<audio> and <video>` are characters.  There once was a person named Flash.  Then Audio and Video came along and killed him.  The end.

A Complete Guide To Grid

1. How does Grid layout differ from Flex?  Grid places child elements into it by row/column.  Flex has one-directional flow.
2. Grid container, grid item, and grid line are a few important terms to understand when using Grid. Please describe these terms in a few sentences.
Container is the layout
Item is the element in each cell
Grid line are the dividing lines of the box

Responsive Images

1. Besides making a site visually appealing across different screen sizes, why should developers make images responsive?  If you don't have the proper image size, it could make the site unreadable or hard to use on different screen sizes.  
2. Define the following `<img>` attributes srcset and sizes. Write an example of how they are used.
  srcset allows the browser to choose from different images of different sizes
  sizes tells the browser which one to choose based on size.

  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
3. How is srcset more helpful for responsive images than CSS or JavaScript?  It helps with bandwidth: browser doesn't need to load large images for small screen sizes.  CSS and Javascript will load the entire page first, then do it's thing.

## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
