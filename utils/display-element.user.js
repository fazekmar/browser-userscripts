// ==UserScript==
// @name         DisplayElement
// @namespace    https://github.com/fazekmar/browser-userscripts
// @version      0.1616342137
// @author       https://github.com/fazekmar
// @license      GPL-3.0; https://github.com/fazekmar/browser-userscripts/blob/master/LICENSE
// @description  Set element display property and optionally fading it
// @updateURL    https://raw.githubusercontent.com/fazekmar/browser-userscripts/master/utils/display-element.user.js
// @grant        none
// ==/UserScript==

/**
 * Set element display property and optionally fading it
 *
 * @param {HTMLElement} element
 * @param {boolean} isDisplay - Show/hide element
 * @param {string} [display=""] - CSS display property used when isDisplay is true
 * @param {boolean} [fade=false] - Enable/disable fade effect
 * @param {number} [intervalSpeed=25] - Fade speed in milliseconds
 * @param {number} [rate=0.1] - Fade increment/decrement rate between 0 and 1
 */
function displayElement(
  element,
  isDisplay,
  display = "",
  fade = false,
  intervalSpeed = 25,
  rate = 0.1,
) {
  try {
    if (fade) {
      let opacity, current_rate;

      if (isDisplay) {
        opacity = 0.0;
        current_rate = rate;

        element.style.opacity = opacity;
        element.style.display = display;
      } else {
        opacity = 1.0;
        current_rate = -rate;
      }

      const interval = setInterval(() => {
        opacity += current_rate;

        if (isDisplay ? opacity >= 1 : opacity <= 0) {
          opacity = isDisplay ? 1.0 : 0.0;
          element.style.display = isDisplay ? display : "none";
          clearInterval(interval);
        }

        element.style.opacity = opacity;
      }, intervalSpeed);
    } else {
      // Reset opacity setting if previously set
      if (isDisplay && element.style.opacity && element.style.opacity !== 1) {
        element.style.opacity = 1;
      }

      element.style.display = isDisplay ? display : "none";
    }
  } catch (e) {
    console.log(e);
  }
}
