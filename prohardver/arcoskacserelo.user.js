// ==UserScript==
// @name         Arcoska cserelo
// @namespace    https://github.com/fazekmar/browser-userscripts
// @version      0.1553970786
// @author       https://github.com/fazekmar
// @license      GPL-3.0; https://github.com/fazekmar/browser-userscripts/blob/master/LICENSE
// @description  Lecsereli az arcoskakat a Prohardver lapcsalad foruman.
// @updateURL    https://raw.githubusercontent.com/fazekmar/browser-userscripts/master/prohardver/arcoskacserelo.user.js
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
    * Ide kell beirni, hogy mire cserelned le az arcoskakat. Annyi a feltetel hogy valid URL legyen.
    * Sorok vegerol ne felejtsd el a vesszot. ;)
    */
    const config = {
        ":)":      "https://fototrend.hu/dl/upc/2019-03/404919_n1.gif",
        ":))":     "https://fototrend.hu/dl/upc/2019-03/404919_n2.gif",
        ":D":      "https://fototrend.hu/dl/upc/2019-03/404919_d1.gif",
        ":DD":     "https://fototrend.hu/dl/upc/2019-03/404919_d2.gif",
        ":DDD":    "https://fototrend.hu/dl/upc/2019-03/404919_d3.gif",
        // ":N":      "https://fototrend.hu/dl/upc/2019-03/404919_nn.gif",
        ":(":      "https://fototrend.hu/dl/upc/2019-03/404919_m1_2.gif",
        ":((":     "https://fototrend.hu/dl/upc/2019-03/404919_m2_2.gif",
        ":(((":    "https://fototrend.hu/dl/upc/2019-03/404919_m3_2.gif",
        ":o":      "https://fototrend.hu/dl/upc/2019-03/404919_os_2.gif",
        ":O":      "https://fototrend.hu/dl/upc/2019-03/404919_ol.gif",
        ":]":      "https://fototrend.hu/dl/upc/2019-03/404919_vl.gif",
        ":P":      "https://fototrend.hu/dl/upc/2019-03/404919_ts.gif",
        ";)":      "https://fototrend.hu/dl/upc/2019-03/404919_pl.gif",
        ":B":      "https://fototrend.hu/dl/upc/2019-03/404919_bl.gif",
        // ":K":      "https://fototrend.hu/dl/upc/2019-03/404919_ye.gif",
        ":U":      "https://fototrend.hu/dl/upc/2019-03/404919_ul.gif",
        ":C":      "https://fototrend.hu/dl/upc/2019-03/404919_cl.gif",
        ":F":      "https://fototrend.hu/dl/upc/2019-03/404919_fl.gif",
        ":Y":      "https://fototrend.hu/dl/upc/2019-03/404919_yk.gif",
        ":R":      "https://fototrend.hu/dl/upc/2019-03/404919_rl.gif",
        ":W":      "https://fototrend.hu/dl/upc/2019-03/404919_wb.gif",
    };
    /* CONFIG END. DO NOT CHANGE ANYTHING AFTER THIS LINE. */

    [...document.images].forEach((img) => {
        try {
            for (let [current, newImg] of Object.entries(config)) {
                if (img.alt === current) {
                    img.src = newImg;
                };
            };
        } catch (e) {
            console.log(e);
        };
    });
})();
