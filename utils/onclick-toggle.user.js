// ==UserScript==
// @name         onclick toggle functions
// @namespace    https://github.com/fazekmar/browser-userscripts
// @version      0.1616344624
// @author       https://github.com/fazekmar
// @license      GPL-3.0; https://github.com/fazekmar/browser-userscripts/blob/master/LICENSE
// @description  Toggle element(s) display state
// @updateURL    https://raw.githubusercontent.com/fazekmar/browser-userscripts/master/utils/onclick-toggle.user.js
// @require      https://raw.githubusercontent.com/fazekmar/browser-userscripts/master/utils/display-element.user.js
// @grant        none
// ==/UserScript==

/* globals displayElement */

/**
 * Toggle element display state with fade (default enabled)
 *
 * @param {HTMLElement} watch - Place onclick funtion to this element
 * @param {HTMLElement} data - Set display state for this element
 * @param {boolean} state - New display state
 * @param {Object} [displayOptions] - displayElement extra parameters
 *
 * @example
 * const header = document.getElementById('header');
 * const data = document.getElementById('data');
 * header.onclick = () => toggleElement(header, data, false);
 * @example
 * header.onclick = () => toggleElement(header, data, false, { display: "block", intervalSpeed: 5 });
 */
const toggleElement = (watch, data, state, displayOptions) => {
  const display = {
    fade: true,
    ...displayOptions,
  };

  displayElement(data, state, display.display, display.fade, display.intervalSpeed, display.rate);

  watch.onclick = () => toggleElement(watch, data, !state, display);
};

/**
 * Toggle elements display state with fade (default enabled)
 *
 * @param {HTMLElement} watch - Place onclick funtion to this element
 * @param {HTMLElement[]} data - Set display state for all element in the list
 * @param {boolean} state - New display state
 * @param {Object} [displayOptions] - displayElement extra parameters
 *
 * @example
 * const header = document.getElementById('header');
 * const data = document.querySelectorAll("[id^=data]")
 * header.onclick = () => toggleElements(header, data, false);
 * @example
 * header.onclick = () => toggleElements(header, data, false, { display: "block", intervalSpeed: 5 });
 */
const toggleElements = (watch, data, state, displayOptions) => {
  const display = {
    fade: true,
    ...displayOptions,
  };

  data.forEach((e) => displayElement(e, state, display.display, display.fade, display.intervalSpeed, display.rate));

  watch.onclick = () => toggleElements(watch, data, !state, display);
};
