// ==UserScript==
// @name        Hacker News dark mode
// @namespace   https://github.com/r-poulsen/greasemonkey/
// @match       https://news.ycombinator.com/*
// @grant       GM_addStyle
// @version     1.0
// @author      r-poulsen
// @description Enables dark mode for Hacker News
// ==/UserScript==

GM_addStyle(`
body {
  background-color: #222;
}

table {
  background-color: #333;
}

span,p,a, .c00, c00 a:link  {
  color: #ccc !important;
}

.subline a, .score, .comhead a {
  color: lightblue !important;
}
`);
