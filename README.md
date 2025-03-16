# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./images/desktop-preview.jpg)

### Links

- Solution URL: [Github](https://github.com/whiteknight-dev/Article-Preview-Component-FM)
- Live Site URL: [Github Pages](https://whiteknight-dev.github.io/Article-Preview-Component-FM/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

I learned how to clone a DOM node that way I removed all the event listeners

```js
primaryButton.replaceWith(primaryButton.cloneNode(true));
secondaryButton.replaceWith(secondaryButton.cloneNode(true));
```

I learned how to recalculate and update the references depending on the event/condition.

```js
addEventListener("resize", bindEvents);
```

### Continued development

- Semantic HTML5
- Advanced CSS
- Responsive Design

### Useful resources

- [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This helped me to check the flex properties.
- [CSS-Tricks Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - This helped me to check the grid properties.

## Author

- Frontend Mentor - [@whiteknight-dev](https://www.frontendmentor.io/profile/whiteknight-dev)
