// ==UserScript==
// @name         Olvasott tema elrejto
// @namespace    https://github.com/fazekmar/browser-userscripts
// @version      0.1597607880
// @author       https://github.com/fazekmar
// @license      GPL-3.0; https://github.com/fazekmar/browser-userscripts/blob/master/LICENSE
// @description  Elrejti azokat a temakat ahova nem erkezett uj hozzaszolas a Kedvencek/Itt szoltam hozza listakbol. A fejlecekre kattintva ujra elo lehet hozni/el lehet rejteni oket
// @updateURL    https://raw.githubusercontent.com/fazekmar/browser-userscripts/master/prohardver/olvasott-tema-elrejto.user.js
// @include      /.*fototrend.hu/(tema|privat).*$/
// @include      /.*prohardver.hu/(tema|privat).*$/
// @include      /.*mobilarena.hu/(tema|privat).*$/
// @include      /.*gamepod.hu/(tema|privat).*$/
// @include      /.*itcafe.hu/(tema|privat).*$/
// @run-at       document-idle
// @grant        none
// ==/UserScript==

const placeOnClickToHeader = (userThreadList) => {
  const cardHeader = userThreadList.getElementsByClassName("card-header");

  [...cardHeader].forEach((header) => {
    if (
      header.innerText.indexOf("Kedvenc fórumtémáim") !== -1 ||
      header.innerText.indexOf("Itt szóltam hozzá") !== -1
    ) {
      header.onclick = () => onClick(header, userThreadList, false);
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

const toggleItems = (doc, show = true) =>
  [...doc.getElementsByClassName("list-group-item")].forEach((item) => {
    if (item.getElementsByClassName("new-msgs").length === 0) {
      toggleElement(item, show, "block", true);
    }
  });

const toggleElement = (element, state, display, fade = false) => {
  const intervalSpeed = 25;
  try {
    if (fade) {
      let opacity = state ? 1.0 : 0.0;
      element.style.opacity = opacity;
      if (!state) {
        element.style.display = display;
      }
      const interval = setInterval(() => {
        opacity += state ? -0.1 : 0.1;
        element.style.opacity = opacity;
        if (state ? opacity <= 0 : opacity >= 1) {
          element.style.display = state ? "none" : display;
          clearInterval(interval);
        }
      }, intervalSpeed);
    } else {
      element.style.display = state ? "none" : display;
    }
  } catch (e) {
    console.log(e);
  }
};

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
