// ==UserScript==
// @name         Hide options and statistics
// @namespace    https://github.com/fazekmar/browser-userscripts
// @version      0.1616189421
// @author       https://github.com/fazekmar
// @license      GPL-3.0; https://github.com/fazekmar/browser-userscripts/blob/master/LICENSE
// @description  Hide options and statistics boxes in the activity/hit'n'run page
// @updateURL    https://raw.githubusercontent.com/fazekmar/browser-userscripts/master/ncore/hide-options-statistics.user.js
// @include      /.*ncore.pro/hitnrun.*$/
// @run-at       document-end
// @require      https://raw.githubusercontent.com/fazekmar/browser-userscripts/master/utils/display-element.user.js
// @grant        none
// ==/UserScript==

/* globals displayElement */

const onClick = (parent, data, state) => {
  displayElement(data, state, "", true);
  parent.onclick = () => onClick(parent, data, !state);
};

const init = () => {
  [...document.getElementsByClassName("fobox_all")].forEach((e) => {
    const data = e.childNodes[9];
    displayElement(data, false, "", false);
    e.onclick = () => onClick(e, data, true);
  });
};

init();
