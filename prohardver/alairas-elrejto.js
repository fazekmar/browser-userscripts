// ==UserScript==
// @name         Alairas elrejto
// @namespace    https://github.com/fazekmar/browser-userscripts
// @version      0.1597583968
// @author       https://github.com/fazekmar
// @license      GPL-3.0; https://github.com/fazekmar/browser-userscripts/blob/master/LICENSE
// @description  Automatikusan elrejti a felhasznalok alairasait
// @updateURL    https://raw.githubusercontent.com/fazekmar/browser-userscripts/master/prohardver/alairas-elrejto.js
// @include      /.*fototrend.hu/(tema|privat|bejegyzes).*$/
// @include      /.*prohardver.hu/(tema|privat|bejegyzes).*$/
// @include      /.*mobilarena.hu/(tema|privat|bejegyzes).*$/
// @include      /.*gamepod.hu/(tema|privat|bejegyzes).*$/
// @include      /.*itcafe.hu/(tema|privat|bejegyzes).*$/
// @include      /.*logout.hu/(tema|privat|bejegyzes).*$/
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
  const legacy = document.getElementsByClassName("msg-sign").length <= 0;
  [...document.getElementsByClassName(legacy ? "sign" : "msg-sign")].forEach(
    (sign) => {
      try {
        sign.style.display = "none";
      } catch (e) {
        console.log(e);
      }
    },
  );
})();
