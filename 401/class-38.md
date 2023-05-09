# Class Notes

This is an important topic because revisiting old topics like React is good review.

1. How does lifting state up in a React application help with managing data flow and what are the benefits of using this approach?

Data flows one way in a React app, so if data needs to be used my different components, it should live in the parent component.  Way easier to manage the data.

2. Explain the concept of conditional rendering in React and provide an example of how to implement it in a component.

Conditional rendering modifies the html output based on JavaScript logic.  An example is showing a login or logout button.

{state.loggedIn ? <p> Show logged in button </p> : <p> Show logged out button </p>}

3. What are the main principles behind “Thinking in React” and how do they guide the process of designing and building a React application?

- Break it up into components
- Build static version
- Identify what state variables you need
- Identify where state should live
- Make inverse data flow, from child to parent, for user input

It's a general guideline for the process of creating the React UI in an organized way.  Helps to reduce confusion about state vs props, where things live, etc.

## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
