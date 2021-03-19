// ==UserScript==
// @name         Olvasott tema elrejto
// @namespace    https://github.com/fazekmar/browser-userscripts
// @version      0.1616176831
// @author       https://github.com/fazekmar
// @license      GPL-3.0; https://github.com/fazekmar/browser-userscripts/blob/master/LICENSE
// @description  Elrejti azokat a temakat ahova nem erkezett uj hozzaszolas a Kedvencek/Itt szoltam hozza listakbol. A fejlecekre kattintva ujra elo lehet hozni/el lehet rejteni oket
// @updateURL    https://raw.githubusercontent.com/fazekmar/browser-userscripts/master/prohardver/olvasott-tema-elrejto.user.js
// @include      /.*fototrend.hu/(forum|tema|privat|tag).*$/
// @include      /.*prohardver.hu/(forum|tema|privat|tag).*$/
// @include      /.*mobilarena.hu/(forum|tema|privat|tag).*$/
// @include      /.*gamepod.hu/(forum|tema|privat|tag).*$/
// @include      /.*itcafe.hu/(forum|tema|privat|tag).*$/
// @run-at       document-idle
// @require      https://raw.githubusercontent.com/fazekmar/browser-userscripts/master/utils/display-element.user.js
// @grant        none
// ==/UserScript==

/* globals displayElement */

const placeOnClickToHeader = (userThreadList) => {
  const cardHeader = userThreadList.getElementsByClassName("card-header");

  [...cardHeader].forEach((header) => {
    if (
      header.innerText.indexOf("Kedvenc fórumtémáim") !== -1 ||
      header.innerText.indexOf("Itt szóltam hozzá") !== -1
    ) {
      header.onclick = () => onClick(header, userThreadList, true);
      header.style.cursor = "pointer";
    }
  });
};

const onClick = (onClickElement, watchElement, show) => {
  try {
    toggleItems(watchElement, show);
    onClickElement.onclick = () => onClick(onClickElement, watchElement, !show);
  } catch (e) {
    console.log(e);
  }
};

const toggleItems = (doc, show = false) =>
  [...doc.getElementsByClassName("list-group-item")].forEach((item) => {
    if (item.getElementsByClassName("new-msgs").length === 0) {
      displayElement(item, show, "block", true);
    }
  });

(function () {
  try {
    [...document.getElementsByClassName("user-thread-list")].forEach(
      (userThreadList) => {
        toggleItems(userThreadList);
        placeOnClickToHeader(userThreadList);
      },
    );
  } catch (e) {
    console.log(e);
  }
})();
