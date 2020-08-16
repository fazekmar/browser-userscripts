// ==UserScript==
// @name         Hozzaszolas rovidito
// @namespace    https://github.com/fazekmar/browser-userscripts
// @version      0.1597606437
// @author       https://github.com/fazekmar
// @license      GPL-3.0; https://github.com/fazekmar/browser-userscripts/blob/master/LICENSE
// @description  A beallitott karakterszamra levagja a hozzaszolasok tartalmat, kinyitas gomb segitsegevel megjelenitheto a teljes tartalom
// @updateURL    https://raw.githubusercontent.com/fazekmar/browser-userscripts/master/prohardver/hozzaszolas-rovidito.user.js
// @include      /.*fototrend.hu/(tema).*$/
// @include      /.*prohardver.hu/(tema).*$/
// @include      /.*mobilarena.hu/(tema).*$/
// @include      /.*gamepod.hu/(tema).*$/
// @include      /.*itcafe.hu/(tema).*$/
// @run-at       document-end
// @grant        none
// ==/UserScript==

/* CONFIG BEGIN
  * Ide kell beirni, hogy kb mennyi legyen az a karakterszam ami utan elrejti a hozzaszolas tobbi reszet
  */
const maxChar = 625;
/* CONFIG END. DO NOT CHANGE ANYTHING AFTER THIS LINE. */

const trimComment = (elem) => {
  const comment = elem.children[1].children[0];
  const oldHTML = comment.innerHTML;
  if (oldHTML.length <= maxChar + 125) {
    return;
  }
  comment.innerHTML = comment.innerHTML.substring(0, maxChar + 16).concat(
    "...",
  );

  const onClickFunction = () => {
    comment.innerHTML = oldHTML;
  };

  comment.appendChild(createButton(onClickFunction));
};

const createButton = (onClickFunction) => {
  const span = document.createElement("span");
  span.className = "fas fa-chevron-down";

  const button = document.createElement("button");
  button.className = "btn btn-primary btn-xs";
  button.innerText = "Hozzászólás kinyitása ";
  button.style.cursor = "pointer";
  button.style.margin = "auto";
  button.onclick = onClickFunction;
  button.appendChild(span);

  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.marginTop = "10px";
  buttonContainer.appendChild(button);

  return buttonContainer;
};

(function () {
  [...document.getElementsByClassName("card-body")]
    .filter((card) =>
      card.innerHTML.indexOf(`class="msg-form"`) === -1 &&
      card.parentElement &&
      card.parentElement.innerText.indexOf("Téma összefoglaló") === -1 &&
      card.children[1] &&
      card.children[1].children[0].innerText.length > maxChar + 16
    )
    .forEach((card) => trimComment(card));
})();
