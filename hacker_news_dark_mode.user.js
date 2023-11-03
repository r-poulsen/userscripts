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
  background-color: #111;
}

table {
  background-color: #222;
}

span,p,a, .c00, c00 a:link  {
  color: #ccc !important;
}

td.subtext {
  padding-bottom: 1em;
}

.subline a, .score, .comhead a {
  color: lightblue !important;
}

/* Holy table-based page-layout, Batman! */
#hnmain > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) {
  background-color: #333;
}

`);
