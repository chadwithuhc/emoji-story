# Emoji Story

We're going to create an animated story about you using HTML, CSS, JavaScript and Emojis!

Objectives:
- Build a simple about me page with HTML
- Style a pages’ colors and fonts with CSS
- Control a page dynamically with JavaScript

Requirements:
- A computer with a text editor
- Internet access

## Part 1: Setting up the HTML

- What is HTML?
- What are some common HTML elements?
  - Examples: `h1`, `p`

Tasks:
- Add an `h1` tag with your name
- Add a `p` tag with a brief tagline


## Part 2: Styling with CSS

- What is CSS?
- What are some common CSS properties?
  - Examples: `color`, `font-size`, `font-family`, `background-color`

Resources:
- Color names available at [147 Color Names](http://www.colors.commutercreative.com/grid/)
- Font family names available on [W3 Schools](http://www.w3schools.com/cssref/css_websafe_fonts.asp)

Tasks:
- Set a `background-color` for the `body` element
- Create styles for the `h1` and `p` tags
  - Set a `font-family`
  - Set a `font-size` (use `em`, Example: `2em`, `3em`, `5em`)
  - Set a `color` for font color


## Part 3: Adding an animated story with JavaScript

- What is JavaScript used for?
- How do we use JavaScript on our page?
- Learn how to use the supplied functions
  - `screen.update(elements)` to update the values for the next screen
  - `screen.show(animationName)` to show the screen
  - `screen.hide(animationName, seconds)` to hide the screen after a certain amount of time

Resources:
- Animations are available through [animate.css](https://daneden.github.io/animate.css/) by using the animation name: Example `bounceIn`
- Emojis are available from [emoji.css](https://afeld.github.io/emoji-css/) by copy and pasting the emoji name: Example `em-basketball`

Tasks:
- Modify the first screen with your own emoji and text
- Add a new screen using the following code:
```
screen.update(
  Icon('em-cat2'),
  Text('I enjoy cats'),
  Icon('em-dog'),
  Text('and dogs')
);

screen.show('bounceInLeft');
screen.hide('bounceOutRight', 3);
```
- Feel free to add as many screen as you'd like
