// ==UserScript==
// @name         Nyomtatobarat atiranyitas
// @namespace    https://github.com/fazekmar/browser-userscripts
// @version      0.1597586394
// @author       https://github.com/fazekmar
// @license      GPL-3.0; https://github.com/fazekmar/browser-userscripts/blob/master/LICENSE
// @description  Amikor elerheto nyomtatobarat verzio akkor automatikusan atiranyit ra
// @updateURL    https://raw.githubusercontent.com/fazekmar/browser-userscripts/master/prohardver/nyomtatobarat-atiranyitas.user.js
// @include      /.*fototrend.hu/(hir|hirek|teszt|tesztek).*$/
// @include      /.*prohardver.hu/(hir|hirek|teszt|tesztek).*$/
// @include      /.*mobilarena.hu/(hir|hirek|teszt|tesztek).*$/
// @include      /.*gamepod.hu/(hir|hirek|teszt|tesztek).*$/
// @include      /.*itcafe.hu/(hir|hirek|teszt|tesztek).*$/
// @include      /.*logout.hu/(hir|hirek|teszt|tesztek).*$/
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
  try {
    [...document.getElementsByClassName("content-thread")].forEach(
      (content) => {
        if (content.href.indexOf("/nyomtatobarat/") !== -1) {
          document.location = content.href;
        }
      },
    );
  } catch (e) {
    console.log(e);
  }
})();
