# Emoji Story

We're going to create an animated story about you using HTML, CSS, JavaScript and Emojis!

### Contents:
- [Part 1: Setting up the HTML](#part-1-setting-up-the-html)
- [Part 2: Styling with CSS](#part-2-styling-with-css)
- [Part 3: Adding an animated story with JavaScript](#part-3-adding-an-animated-story-with-javascript)
- [Additional Resources](#additional-resources)
- [Troubleshooting](#troubleshooting)

### Objectives:
- Build a simple about me page with HTML
- Style a pages’ colors and fonts with CSS
- STRETCH: Control a page dynamically with JavaScript

### Requirements:
- Chrome Web Browser
- Internet access



## Part 1: Setting up the HTML

> Objective: Build a simple about me page with HTML

- What is HTML?
- What are some common HTML elements?
  - Think of a [Word Document](https://docs.google.com/document/d/1pFWVHCHcwDCroAXCRmgx_SjTiUfjDe0B5pEnySBRIbU/edit?usp=sharing) on Google Docs
  - Examples: `<header>`, `<h1>`, `<p>`

### Tasks:
- Open Chrome Web Browser and go to `jsbin.com`
- Add an `<h1>` tag with your name
- Add a `<p>` tag with your name and grade
- Add another `<p>` tag highlighting two of your likes
  - Want to write more? Feel free to add more `<p>` tags
  - Want to split text between lines? Try a `<br/>`
- Add a link to the `emoji.css` file after the `</title>` tag
  - `<link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet">`
- Add matching emoji(s) before each `<p>` tag
  - `<i class="em em-some-emoji"></i>` then replace `em-some-emoji` with emoji name: Example `em-basketball`

### Resources:
- Emojis are available from [emoji.css](https://afeld.github.io/emoji-css/) by copy and pasting the emoji name: Example `em-basketball`



## Part 2: Styling with CSS

> Objective: Style a pages’ colors and fonts with CSS

- What is CSS and what is it used for?
- What are some common CSS properties?
  - Examples: `background-color`, `font-size`, `font-family`, `color`

### Tasks:
- Add a `<style>` tag before the `</head>` tag
- Set a `background-color` for the `body` element
```
body {
  background-color: orange;
}
```
- Add a font from [Google Fonts](https://fonts.google.com/)
  - Find a font you like
  - Click the (+) on the top right of its box
  - Click on the "Family Selected" box and follow instructions to add
- Create styles for the `h1` and `p` tags
  - Set a `font-family`
  - Set a `font-size` (use `em`, Example: `2em`, `3em`, `5em`)
  - Set a `color` for font color
  - Try out `letter-spacing`, `border`, `text-transform`, `font-weight`, `font-style`
- Increase the size of the emojis by styling with its CSS selector
```
.em {
  font-size: 2em;
}
```

### Resources:
- Color names available at [147 Color Names](http://www.colors.commutercreative.com/grid/)
- Fonts available on [Google Fonts](https://fonts.google.com/)



## Part 3: Adding an animated story with JavaScript

> Objective: (STRETCH) Control a page dynamically with JavaScript

- What is JavaScript used for?
- How do we use JavaScript on our page?
- Learn how to use the supplied functions
  - `screen.setContent(elements)` to update the values for the next screen
  - `screen.show(animationName)` to show the screen
  - `screen.hide(animationName, seconds)` to hide the screen after a certain amount of time

### Resources:
- Animations are available through [animate.css](https://daneden.github.io/animate.css/) by using the animation name: Example `bounceIn`
- Emojis are available from [emoji.css](https://afeld.github.io/emoji-css/) by copy and pasting the emoji name: Example `em-basketball`

### Tasks:
- Add an element to the page with an `id` of "story"
  - `<main id="story"></main>`
- Include a link to the `animate.css` styles
  - `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css">`
- Include required JavaScript files (jQuery & Emoji Story) right before `</head>`
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.js"></script>
<script src="https://chadwithuhc.github.io/emoji-story/scripts/emoji-story.js"></script>
```
- Add a `<script>` tag with the following code right before the `</head>`
```
<script>
    $(document).ready(function() {
      var screen = new Screen();

      screen.setContent(
        Icon('em-bear'),
        Text('Hi! My name is Chad!')
      );

      screen.show('bounceIn');
      screen.hide('bounceOut', 3);

      // When we're done writing our timeline, START!
      screen.start();
    });
  </script>
```
- Modify the first screen with your own emoji and text
  - Replace `em-bear` with the emoji name you used in your HTML
  - Multiple emojis can be added by using a `+`, Example: `Icon('em-basketball') + Icon('em-tennis'),`
  - Replace the text with the copy in your `<p>` tag
  - Pay attention to usage of semicolons and commas, they are important!
- Add a new screen adding the following code inside your `<script>`:
```
screen.setContent(
  Icon('em-cat2'),
  Text('I enjoy cats'),
  Icon('em-dog'),
  Text('and dogs')
);

screen.show('bounceInLeft');
screen.hide('bounceOutRight', 3);
```
- Feel free to add as many screen as you'd like
- HINT: If you are having trouble getting things to animate, try checking for errors in the Console. Right click the page, choose "Inspect", then switch to the "Console" tab. Do you see errors? Google them.

## Additional Resources

Having trouble with something? Try Googling the problem. Some sample Google searches are:
- `HTML tag names`
- `CSS text-transform property`
- `JavaScript [error name]` if you are getting errors
  - Example: `JavaScript Uncaught SyntaxError: missing ) after argument list`

Good answers or solutions will be found on Mozilla Developer Network (MDN), StackOverflow (question and answer site), or various blog articles.

## Troubleshooting

Can't find answers on Google? Here's some common problems.

Fonts not loading?
> Is your `link` tag in your `<head>`?  
> Have you added your `font-family` declaration in your CSS?

CSS styles not working?
> Are you targeting the right element? `p`, `h1`, etc.  
> Is your syntax correct? `property: value;` Semicolons required!

JavaScript not running?
> Are there errors in the console? Right click the page, choose "Inspect", then switch to the "Console" tab. Do you see errors?  
> Did you include the `<script>` tags with `src` on them? These are required.

If all else fails and you are completely lost, feel free to [reach out to me](mailto:chad@cmfolio.com).
