// ==UserScript==
// @name         Filter torrents by state
// @namespace    https://github.com/fazekmar/browser-userscripts
// @version      0.1616187776
// @author       https://github.com/fazekmar
// @license      GPL-3.0; https://github.com/fazekmar/browser-userscripts/blob/master/LICENSE
// @description  Create filter buttons for the activity/hit'n'run table
// @updateURL    https://raw.githubusercontent.com/fazekmar/browser-userscripts/master/ncore/filter-by-state.user.js
// @include      /.*ncore.pro/hitnrun.*$/
// @run-at       document-end
// @require      https://raw.githubusercontent.com/fazekmar/browser-userscripts/master/utils/display-element.user.js
// @grant        none
// ==/UserScript==

/* globals displayElement */

const resetDisplay = () => {
  [...document.getElementsByClassName("hnr_torrents")].forEach((line) => {
    displayElement(line, true, "");
  });
};

const fixBackground = () => {
  [...document.querySelectorAll("[class^=hnr_all]")]
    .filter((line) => line.parentNode.style.display !== "none")
    .forEach((line, index) => {
      const className = `hnr_all${index % 2 === 0 ? "2" : ""}`;

      line.className = className;
      line.parentNode.addEventListener("mouseover", function (event) {
        this.childNodes[1].className = "hnr_hl";
      });
      line.parentNode.addEventListener("mouseout", function (event) {
        this.childNodes[1].className = className;
      });
    });
};

const showTable = () => {
  const torrents = document.getElementsByClassName("box_torrent_all")[0];
  displayElement(torrents, true, "", true);
};

const fixCounter = () => {
  const count = [...document.getElementsByClassName("hnr_torrents")].filter(
    (line) => line.style.display !== "none",
  ).length;
  const header = document.getElementsByClassName("lista_fej")[0].childNodes[0];

  header.textContent = header.textContent.replace(/\(.*\)/, `(${count})`);
};

const createButton = (id, titleText, filterFunction) => {
  const btn = document.createElement("button");
  btn.style.fontSize = "10px";
  btn.style.background = "none";
  btn.style.border = "0px";
  btn.id = id;

  const btnTitle = document.createElement("a");
  btnTitle.textContent = titleText;
  btn.appendChild(btnTitle);

  btn.onclick = () => {
    resetDisplay();

    [...document.getElementsByClassName("hnr_torrents")]
      .filter(filterFunction)
      .forEach((line) => displayElement(line, false));

    fixBackground();
    fixCounter();
    showTable();
  };

  const fejlec = document.getElementsByClassName("lista_fej")[0];
  fejlec.appendChild(btn);

  return btn;
};

const init = () => {
  const allButton = createButton("all-button", "All", () => { });
  allButton.style.marginLeft = "30px";
  allButton.onclick = () => {
    resetDisplay();
    fixBackground();
    fixCounter();
    showTable();
  };

  const seedFilter = (e) => e.innerHTML.indexOf(">Seed<") === -1;
  createButton("seed-button", "Seed", seedFilter);

  const stoppedFilter = (e) => e.innerHTML.indexOf(">Stopped<") === -1;
  createButton("stopped-button", "Stopped", stoppedFilter);

  const leechFilter = (e) => e.innerHTML.indexOf(">Leech<") === -1;
  createButton("stopped-button", "Leech", leechFilter);

  const remainingFilter = (e) => e.innerHTML.indexOf('class="stopped">') === -1;
  createButton("hnrun-button", "Remaining", remainingFilter);
};

init();
