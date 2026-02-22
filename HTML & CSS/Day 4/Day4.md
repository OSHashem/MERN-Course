# CSS & HTML Learning Summary - Day 4

## Height & Width
- Default dimensions are `auto` (content-based sizing)
- `width` and `height` properties set explicit dimensions
- `max-width` overrides `width` on smaller viewports
- `box-sizing: border-box` includes padding and border in size calculations

## CSS Positions
| Position | Behavior |
|----------|----------|
| `static` | Normal document flow (default) |
| `relative` | Positioned relative to normal position |
| `fixed` | Pinned to browser viewport |
| `absolute` | Positioned to nearest positioned ancestor |
| `sticky` | Scrolls with page, then fixed at offset |

## Background Images
- `background-image: url()` sets image
- `background-repeat`, `background-position`, `background-size` control appearance
- `background-attachment: fixed` keeps image fixed while scrolling

## CSS Combinators
| Combinator | Meaning | Example |
|-----------|---------|---------|
| ` ` (space) | Descendant | `#container p` |
| `>` | Direct child | `#container > p` |
| `+` | Adjacent sibling | `#container + p` |
| `~` | General sibling | `#container ~ p` |

## Pseudo-classes
- `:hover`, `:active`, `:visited`, `:link` - link states
- `:nth-child(n)` - select by position (supports `odd`, `even`, formulas)
- `:not(selector)` - negation
- `:focus`, `:first-child`, `:last-child`

## Pseudo-elements
- `::first-letter` - style first character
- `::selection` - style user-selected text
- `::before`, `::after` - insert content before/after element

## Pagination & Navigation
- Styled with centered links and active state highlighting
- Use `display: inline-block` for horizontal layout
- `.active` class highlights current page

## Dropdown Menus
- Use `position: relative` on container
- Hide content with `display: none`
- Show on `:hover`

## Navigation Bar
- Float list items left for horizontal layout
- Remove default list styling with `list-style-type: none`
- Add hover effects to links

## Website Layout
- `aside`, `section`, `article` elements floated at 33% width
- `@media` query changes to 100% width on screens ≤600px

## Image Gallery
- `display: inline-block` for grid layout
- Add borders and hover effects

## Flexbox
- `display: flex` enables flexbox layout
- `flex-direction` controls axis (row/column)
- `justify-content` aligns main axis (x)
- `align-items` aligns cross axis (y)
- `flex-wrap` enables wrapping
- `order` reorders items; `gap` adds spacing

## Transformations
- `transform` property applies effects
- Methods: `translate()`, `rotate()`, `scale()`, `skew()`
- Can combine multiple transforms

## Animations
- `@keyframes` define animation stages
- Properties: `animation-duration`, `animation-name`, `animation-iteration-count`, `animation-direction`, `animation-timing-function`
- `animation-play-state` controls running/paused state
