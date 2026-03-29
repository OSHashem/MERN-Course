# Day 12 JavaScript DOM Lesson Summary

## 1. Overview
- Topic: DOM manipulation and events in vanilla JavaScript
- Focus areas:
  - element selection
  - DOM traversal
  - creating and removing elements
  - event listeners (mouse, keyboard)
  - classList methods
  - small interactive projects (rock-paper-scissors, image slider)

## 2. Setup and Basics
- `document` represents the page DOM tree.
- `document.title = "DAY 12"` changes the browser tab title.
- `document.getElementById('welcome-msg')` is used to change text and styling.

## 3. Element Selectors
- `getElementById()` returns a single element or `null`.
- `getElementsByClassName()` / `getElementsByTagName()` return live `HTMLCollection`.
- `querySelector()` returns the first matching element.
- `querySelectorAll()` returns a static `NodeList` with `forEach`.
- Color operations:
  - `.fruits` items, `h4`, `li` items are styled.
  - query selectors and `Array.from()` are used to iterate collections.

## 4. DOM Navigation
- Parent/child/sibling relationships:
  - `.firstElementChild`, `.lastElementChild`
  - `.nextElementSibling`, `.previousElementSibling`
  - `.parentElement`, `.children`
- Examples:
  - root `ul` first child to green, last child to pink
  - `#apple` next sibling orange
  - `#onions` previous sibling highlight

## 5. Add/Change/Remove Elements
- Create an `h1`, set `textContent`, id, and style.
- Append with `.append()` inside `body` and in `#box1`.
- Remove via `.removeChild()`.

## 6. Add/Change Text Node
- Create `<p>` and text node with `createTextNode`.
- Append node to paragraph and document.

## 7. Mouse Events
- `#myBox` listens on `click`, `mouseover`, `mouseout`.
- `event.target` is used to update text and background colors.

## 8. Keyboard Events
- `document.addEventListener('keydown')` and `keyup` track keys.
- Game movement logic uses arrow keys to change `x/y` and update `keyBox` position.

## 9. Hide/Show HTML with Button
- `#myButton` toggles `#htmlBox` style between `display: none` and `display: block`.

## 10. NodeLists in JS
- `document.querySelectorAll('.myButtons')` to collect buttons.
- Add new button with DOM creation and update NodeList by re-querying.
- Remove buttons by attaching click listeners.

## 11. classList operations
- `classButton.classList.add('enabled')`, `.remove()`, `.toggle()`, `.replace()`, `.contains()`.
- `.classButtons` list toggles `.hover` class on mouse events.

## 12. Rock Paper Scissors Game
- Constants and DOM references for player/computer displays and score tracking.
- `playGame(choice)` handles random computer choice and result logic.

## 13. Image Slider
- `slides = document.querySelectorAll('.slides img')`, with `slideIndex`, `intervalId`.
- On `DOMContentLoaded`, `intializeSlider()` shows first image and auto-rotates.
- `nextSlide()`, `prevSlide()`, and `showSlide(index)` manage transitions.

## 14. Styling Highlights (style.css)
- Layout and block styles for boxes, buttons, and slider.
- Classes for enabled/disabled/hover behavior.
- `@keyframes fade` for slider animation.
