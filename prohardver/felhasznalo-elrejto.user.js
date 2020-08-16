// ==UserScript==
// @name         Felhasznalo elrejto
// @namespace    https://github.com/fazekmar/browser-userscripts
// @version      0.1597589601
// @author       https://github.com/fazekmar
// @license      GPL-3.0; https://github.com/fazekmar/browser-userscripts/blob/master/LICENSE
// @description  Elrejti a kivalasztott felhasznalo(k) hozzaszolasainak tartalmat. Az uzenet fejlecere kattintva megjelenitheto a hozzaszolas.
// @updateURL    https://raw.githubusercontent.com/fazekmar/browser-userscripts/master/prohardver/felhasznalo-elrejto.user.js
// @include      /.*fototrend.hu/(tema).*$/
// @include      /.*prohardver.hu/(tema).*$/
// @include      /.*mobilarena.hu/(tema).*$/
// @include      /.*gamepod.hu/(tema).*$/
// @include      /.*itcafe.hu/(tema).*$/
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
  /* CONFIG BEGIN
    * Ide kell beirni, hogy melyik felhasznalo(ka)t szeretned elrejteni
    * Egyszeruen masold be a nevet, ha tartalmaz szokozt, specialis karaktert akkor azzal egyutt. pl.: "Dr. Romano"
    * Sorok vegerol ne felejtsd el a vesszot. ;)
    */
  const config = [
    "Nev1",
    "Nev2",
  ];
  /* CONFIG END. DO NOT CHANGE ANYTHING AFTER THIS LINE. */

  [...document.getElementsByClassName("card")].forEach((card) => {
    config.forEach((user) => {
      try {
        if (card.children[1].children[0].children[1].innerText === user) {
          const msg = card.children[1];
          msg.style.display = "none";
          card.children[0].onclick = () => {
            msg.style.display = "flex";
            card.children[0].onclick = "";
          };
        }
      } catch (e) {
      }
    });
  });
})();
