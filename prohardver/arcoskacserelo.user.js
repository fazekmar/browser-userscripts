// ==UserScript==
// @name         Arcoska cserelo
// @namespace    https://github.com/fazekmar/browser-userscripts
// @version      0.1597587326
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

(function () {
  "use strict";
  /* CONFIG BEGIN
    * Ide kell beirni, hogy mire cserelned le az arcoskakat. Annyi a feltetel hogy valid URL legyen.
    * Sorok vegerol ne felejtsd el a vesszot. ;)
    */

  const host = `https://${document.domain}`;
  const config = {
    ":)": `${host}/dl/upc/2019-03/404919_n1.gif`,
    ":))": `${host}/dl/upc/2019-03/404919_n2.gif`,
    ":D": `${host}/dl/upc/2019-03/404919_d1.gif`,
    ":DD": `${host}/dl/upc/2019-03/404919_d2.gif`,
    ":DDD": `${host}/dl/upc/2019-03/404919_d3.gif`,
    // ":N":      `${host}/dl/upc/2019-03/404919_nn.gif`,
    ":(": `${host}/dl/upc/2019-03/404919_m1_2.gif`,
    ":((": `${host}/dl/upc/2019-03/404919_m2_2.gif`,
    ":(((": `${host}/dl/upc/2019-03/404919_m3_2.gif`,
    ":o": `${host}/dl/upc/2019-03/404919_os_2.gif`,
    ":O": `${host}/dl/upc/2019-03/404919_ol.gif`,
    ":]": `${host}/dl/upc/2019-03/404919_vl.gif`,
    ":P": `${host}/dl/upc/2019-03/404919_ts.gif`,
    ";)": `${host}/dl/upc/2019-03/404919_pl.gif`,
    ":B": `${host}/dl/upc/2019-03/404919_bl.gif`,
    // ":K":      `${host}/dl/upc/2019-03/404919_ye.gif`,
    ":U": `${host}/dl/upc/2019-03/404919_ul.gif`,
    ":C": `${host}/dl/upc/2019-03/404919_cl.gif`,
    ":F": `${host}/dl/upc/2019-03/404919_fl.gif`,
    ":Y": `${host}/dl/upc/2019-03/404919_yk.gif`,
    ":R": `${host}/dl/upc/2019-03/404919_rl.gif`,
    ":W": `${host}/dl/upc/2019-03/404919_wb.gif`,
  };
  /* CONFIG END. DO NOT CHANGE ANYTHING AFTER THIS LINE. */

  [...document.images].forEach((img) => {
    try {
      for (let [current, newImg] of Object.entries(config)) {
        if (img.alt === current) {
          img.src = newImg;
        }
      }
    } catch (e) {
      console.log(e);
    }
  });
})();
