// ==UserScript==
// @name        Make ekstrabladet.dk tolerable
// @namespace   Violentmonkey Scripts
// @match       https://ekstrabladet.dk/*
// @grant       none
// @version     1.0
// @author      r-poulsen
// @description Makes ekstrabladet.dk slightly more tolerable
// ==/UserScript==

function unwanted_element_blur(el) {
  // Blur+darken. Good for debugging.
  el.style.filter="blur(5px) brightness(15%)"
}

function unwanted_element_remove(el) {
  // Just plan remove it. Potentially break layout.
  el.parentElement.removeChild(el)
}

function unwanted_element_hide(el) {
  // Hide (but leave the empty box). Shouldn't break layout too much.
  el.style.display="none"
}

function unwanted_element(el) {
  // Default action
  //console.log(el)
  //if (el !== undefined && el !== null) {
    unwanted_element_remove(el)
  //}
}

// All the different ways paywalled articles show
window.addEventListener('load', function() {

    [ document.getElementById('frontpageLocalNews_') ].forEach(
      el => {
        if (el !== undefined && el !== null) {
          unwanted_element(el)
        }
      }
    );

    [ ...document.getElementsByClassName('dre-item__chaser--badge-premium'),
      ...document.getElementsByClassName('card-content--plusview'),
      document.getElementById('myfrontpage'), ...document.getElementsByClassName('localnews')
    ].forEach(
      el => {
        if (el !== undefined && el !== null) {
           unwanted_element(el.parentElement)
        }
      }
    );

    [ ...document.getElementsByClassName('dre-feature-snippet--plus'),
      ...document.getElementsByClassName('premium-dogear')].forEach(
      el => {
        unwanted_element(el.parentElement.parentElement.parentElement)
      }
    );

    // Byebye, unfunny attempts at memes
    [ ...document.getElementsByClassName('ff-primary') ].forEach(
      el => {
        if (el.textContent.match(/Bagholdet/)) {
          unwanted_element(el.parentElement.parentElement.parentElement)
        }
      }
    );

});

// Setup a mutationobserver (black magic) to handle the lazyloaded paywal links.
let observer = new MutationObserver(mutations => {
  for(let mutation of mutations) {
    for(let node of mutation.addedNodes) {
      if (!(node instanceof HTMLElement)) continue;
        // That's a lot of parentElements
        if (node.classList.contains('premium-dogear')) {
          unwanted_element(node.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
        }
    }
  }
});

observer.observe(document.body, {childList: true, subtree: true});
