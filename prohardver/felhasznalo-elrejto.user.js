// ==UserScript==
// @name         Felhasznalo elrejto
// @namespace    https://github.com/fazekmar/browser-userscripts
// @version      0.1602412571
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
    * Opcionalisan teljesen el lehet rejteni a felhasznalo hozzaszolasait, lasd 3. pelda a configban.
    * Sorok vegerol ne felejtsd el a vesszot. ;)
    */
  const config = [
    "Nev1", // Fejlec megjelenik
    { nick: "Nev2", full: false }, // Fejlec megjelenik
    { nick: "Nev3", full: true }, // Teljes rejtes
  ];
  // Megprobalja a kovetkezo olvasatlan uzenetre navigalni az oldalt ha az aktualis elrejtesre kerul
  const scrollFix = true; // true/false
  /* CONFIG END. DO NOT CHANGE ANYTHING AFTER THIS LINE. */

  [...document.getElementsByClassName("card")].forEach((card) => {
    config.forEach((user) => {
      const nick = user.nick ? user.nick : user;
      const full = user.full ? user.full : false;
      try {
        if (card.children[1].children[0].children[1].innerText === nick) {
          if (full) {
            card.style.display = "none";
          } else {
            const msg = card.children[1];
            msg.style.display = "none";
            card.children[0].onclick = () => {
              msg.style.display = "flex";
              card.children[0].onclick = "";
            };
          }
        }
      } catch (e) {
      }
    });
  });

  if (scrollFix) {
    if (document.URL.indexOf("#msg") === -1) {
      return;
    }

    let requestId = parseInt(document.URL.split("#msg").slice(-1)[0]);
    if (!requestId) {
      return;
    }

    let hashId =
      [...document.getElementsByClassName("target-anchor")].filter((ta) =>
        parseInt(ta.id.split("msg").slice(-1)[0]) >= requestId &&
        [...ta.parentElement.children].some((c) =>
          c.className === "card" && c.style.display !== "none"
        )
      ).map((ta) => ta.id).sort()[0];

    if (hashId) {
      window.location.hash = hashId;
    }
  }
})();
