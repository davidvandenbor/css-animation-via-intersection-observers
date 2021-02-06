# CSS scrollbar animations triggered with Javascript intersection observers

Play live with this code in **CodeSandBox** > [click here!](https://codesandbox.io/embed/github/davidvandenbor/css-animation-triggered-with-intersection-observers/tree/master/?fontsize=14&hidenavigation=1&theme=dark&view=preview)

The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target HTML element with an ancestor HTML element or with a top-level document's viewport. Implementing intersection detection in the past involved event handlers and loops calling methods like Element.getBoundingClientRect() to build up the needed information for every element affected.

 Now you can make CSS animations any way you like and use the Javascript IntersectionObserver API to stick these animations onto HTML elements  on the fly  that enter into view! You simply trigger CSS animations to play when "targeted" html elements enter the browser viewport.

The reason I like this approach:

* It "builds" on top of knowledge you already know. If you already know how to make CSS animations, you can hit the ground running! No need for animation frameworks or libraries.
* Javascript is added (on top) of your existing skill set, instead of having it replace HTML/CSS. Make Javascript work with you, not against you.
* Separation of design (CSS animation) and interaction (Javascript) to avoid mish-mashing the two (WordPress also has this problem: nilly willy mixing of HTML and PHP)
* Designer approach: with pure CSS you have more power/flexibility to create animations, you can animate any infinite CSS attribute that you like (go bonkers) and it's less verbose than javascript animations or GSAP

