# CSS Fundamentals - Day 3 Summary

<!-- ## Overview
This lesson covers the three main methods of applying CSS and explores key CSS properties for styling web pages. -->

## CSS Application Methods

| Method | Location | Example |
|--------|----------|---------|
| **Inline** | HTML element's `style` attribute | `<h1 style="color: darkred;">` |
| **Internal** | `<style>` tag in `<head>` | `p { color: darkblue; }` |
| **External** | Separate `.css` file | `<link rel="stylesheet" href="style.css">` |

## Colors in CSS

Four primary color specification methods:
- **Named Colors:** `darkblue`, `crimson`, `red`
- **Hexadecimal:** `#FF0000`
- **RGB:** `rgb(0, 121, 0)`
- **HSL:** `hsl(276, 100%, 30%)`

## Fonts

Key font properties:
- `font-family`: Arial, Verdana, Impact, etc.
- `font-size`: `16px` (default), `1em` (100% of parent)
- `font-weight`: `bold`
- `font-style`: `italic`

## Borders

Define borders using:
```css
border: 3px solid hsl(262, 100%, 56%);
border-radius: 20px;
```

Or individually: `border-top`, `border-bottom`, `border-left`, `border-right`

## Shadows & Effects

- **Text Shadow:** `text-shadow: 3px 3px 5px color;`
- **Box Shadow:** `box-shadow: 10px 10px 20px;`

## Layout Properties

| Property | Purpose |
|----------|---------|
| **Margins** | Space around elements outside borders |
| **Float** | Allows text/elements to wrap around floating content |
| **Overflow** | Controls content exceeding container bounds (`visible`, `hidden`, `auto`, `scroll`) |
| **Display** | Changes element rendering (`block`, `inline`, `flow-root`) |

## Display Behavior

- **Block-level:** `<div>`, `<p>`, `<h1>-<h6>` — start new lines, full width
- **Inline-level:** `<span>`, `<a>`, `<img>` — no new line, minimal width
