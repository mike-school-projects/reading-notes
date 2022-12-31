# Class 1 Notes

This is an important topic because...

## Read 01 - Introduction to React and Components

This is important because React is widely used to deploy websites and I need to learn it.

Component-Based Architecture

1. What is a “component”?
a modular, portable, replaceable, and reusable set of well-defined functionality that encapsulates its implementation and exporting it as a higher-level interface

2. What are the characteristics of a component?
Reusability − Components are usually designed to be reused in different situations in different applications. However, some components may be designed for a specific task.
Replaceable − Components may be freely substituted with other similar components.
Not context specific − Components are designed to operate in different environments and contexts.
Extensible − A component can be extended from existing components to provide new behavior.
Encapsulated − A A component depicts the interfaces, which allow the caller to use its functionality, and do not expose details of the internal processes or any internal variables or state.
Independent − Components are designed to have minimal dependencies on other components.

3. What are the advantages of using component-based architecture?
Reduced time in market and the development cost by reusing existing components.
Increased reliability with the reuse of the existing components.

What is Props and How to Use it in React

1. What is “props” short for?
Properties

2. How are props used in React?
Passing data from one component to another

3. What is the flow of props?
uni-directional, from parent to child

## Learn ES6 Classes in JavaScript

class Animal {
  constructor (name, legs) {
    this.name = name;
    this.legs = legs;
  }

  walk() {
    this.isWalking = true;
  }
}

class Dog extends Animal {
  speak () {
    console.log('Woof');
  }

  constructor (name,legs,furType){
    super(name,legs);
    this.furType = furType;
  }
}

## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
