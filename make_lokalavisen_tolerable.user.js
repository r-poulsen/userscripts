// ==UserScript==
// @name        Make lokalavisen.dk tolerable
// @namespace   https://github.com/r-poulsen/userscripts/
// @match       https://lokalavisen.dk/*
// @grant       none
// @version     1.0
// @author      r-poulsen
// @description Makes lokalavisen.dk slightly more tolerable
// ==/UserScript==

function unwanted_element_blur(el) {
    // Blur+darken. Good for debugging.
    el.style.filter = "blur(5px) brightness(15%)";
}

function unwanted_element_remove(el) {
    // Just plan remove it. Potentially break layout.
    el.parentElement.removeChild(el);
}

function unwanted_element_hide(el) {
    // Hide (but leave the empty box). Shouldn't break layout too much.
    el.style.display = "none";
}

function unwanted_element(el) {
    // Default action - Change this to unwanted_element_blur to see unwanted elements
    unwanted_element_remove(el);
}

window.addEventListener("load", function () {
    [...document.querySelectorAll("[data-banner-type]")].forEach((el) => {
        console.log(el);
        if (el !== undefined && el !== null) {
            unwanted_element(el);
        }
    });
});
