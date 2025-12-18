# Introduction to React.js & the DOM

## React.js Overview

React.js is a JavaScript library used for building user interfaces. It allows developers to create complex interfaces by breaking them into independent, reusable components. Each component controls a specific part of the user interface and manages its own data.

React follows a component-based architecture, making applications easier to build, maintain, and scale.

---

## Core Concepts in React

### Components

Components are the building blocks of a React application. They are usually written as function-based components using JSX, a syntax extension that resembles HTML but is written in JavaScript.

A React component:
- Is structured like a JavaScript function
- Returns JSX
- Is reusable
- Can manage its own data

---

### State

State refers to the data of a component. When the state changes, React automatically updates the user interface to reflect those changes.

State is:
- Local to the component
- Dynamic
- Managed using hooks such as `useState`

---

### Props

Props (short for properties) are used to pass data from a parent component to a child component.

Props:
- Are read-only
- Allow component communication
- Improve reusability

---

## React Hooks

React Hooks allow function components to use React features such as state and lifecycle methods.

### Common React Hooks

1. **useState**  
   Allows the creation and management of state variables.

2. **useEffect**  
   Handles side effects such as data fetching and DOM updates.  
   Executes after the component is mounted or updated.

3. **useContext**  
   Enables global data sharing across components without prop drilling.

4. **useRef**  
   Allows referencing DOM elements or persisting values between renders.

5. **useReducer**  
   Implements the reducer pattern for managing complex state logic.

6. **useMemo**  
   Optimizes performance by memoizing computed values.

7. **useCallback**  
   Prevents unnecessary function re-creation by memoizing functions.

---

## The Document Object Model (DOM)

The Document Object is the root of the HTML Document Object Model (DOM). According to Rytis Desutis, all DOM operations begin at the Document Object since it is the common root of all elements within a document.

---

## Accessing DOM Elements

To manipulate the DOM, elements must first be selected.

### Common Methods

- `getElementById(id)` – Selects an element by its unique ID
- `getElementsByTagName(name)` – Selects elements by tag name
- `getElementsByClassName(name)` – Selects elements by class name
- `querySelectorAll(selector)` – Selects elements using CSS selectors

---

## Modifying DOM Elements

Once selected, DOM elements can be modified in several ways:

- Change content using `.innerHTML`
- Modify attributes such as `src` or `href`
- Update styles using `.style.property`

---

## Adding and Removing Elements

The DOM allows dynamic modification of page structure:

- Create elements using `document.createElement()`
- Add elements using `appendChild()`
- Remove elements using `removeChild()`

---

## DOM Object Collections

The DOM provides built-in collections for accessing specific elements:

- `document.forms`
- `document.images`
- `document.links`

These collections simplify element management and navigation.

---

## Summary

React enables efficient UI development through reusable components and state management, while the DOM allows direct interaction with HTML elements. Together, they form the foundation of modern front-end development.



