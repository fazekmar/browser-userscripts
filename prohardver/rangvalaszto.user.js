// ==UserScript==
// @name         RangValaszto
// @namespace    https://github.com/fazekmar/browser-userscripts
// @version      0.1553952101
// @author       https://github.com/fazekmar
// @license      GPL-3.0; https://github.com/fazekmar/browser-userscripts/blob/master/LICENSE
// @description  Lecsereli a felhasznalo(k) / rang(ok) szovegezeset a Prohardver lapcsalad foruman.
// @updateURL    https://raw.githubusercontent.com/fazekmar/browser-userscripts/master/prohardver/rangvalaszto.user.js
// @include      /.*fototrend.hu/(tema|privat|bejegyzes).*$/
// @include      /.*prohardver.hu/(tema|privat|bejegyzes).*$/
// @include      /.*mobilarena.hu/(tema|privat|bejegyzes).*$/
// @include      /.*gamepod.hu/(tema|privat|bejegyzes).*$/
// @include      /.*itcafe.hu/(tema|privat|bejegyzes).*$/
// @include      /.*logout.hu/(tema|privat|bejegyzes).*$/
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    /* CONFIG BEGIN
    * Ide kell beirni, hogy az adott nicknek milyen rangot szeretnel beallitani / melyik rangot mire cserelned
    * Egyszeruen masold be a nevet/rangot, ha tartalmaz szokozt, specialis karaktert akkor azzal egyutt. pl.: "Dr. Romano", "PH! kedvence"
    * Sorok vegerol ne felejtsd el a vesszot. ;)
    */
    const config = {
        usernameRank: {
            "somogyib":    "nagyúrnő", // https://logout.hu/tema/re_kalandor_atalakitanank_a_rangrendszert/hsz_1243-1243.html
            "wwenigma":    "Jómunkásember\nszeretne lenni", // https://logout.hu/tema/re_kalandor_atalakitanank_a_rangrendszert/keres.php?suser=wwenigma
        },
        rankToReplace: {
            "Jómunkásember": "SzóPHosó",
            "Ármester":      "Ármestör",
            "HÁZIGAZDA":     "PH! ISTEN",
        },
    };
    /* CONFIG END. DO NOT CHANGE ANYTHING AFTER THIS LINE. */

    const legacy = document.getElementsByClassName("msg-user").length <= 0;
    [...document.getElementsByClassName(!legacy ? "msg-user" : "face")].forEach((msgUser) => {
        try {
            for (let conf of Object.entries(config)) {
                const user = conf[0] === "usernameRank";
                for (let [current, newRank] of Object.entries(conf[1])) {
                    !legacy ? msgUser.children[user ? 1 : 2].innerText === current ? msgUser.children[2].innerText = newRank : null
                    : msgUser.innerHTML.search(current) !== -1 ? msgUser.innerHTML = msgUser.innerHTML.replace(user ? /\(.*?\)/ : `(${current})`, `(${newRank})`) : null;
                };
            };
        } catch (e) {
            console.log(e);
        };
    });
})();
