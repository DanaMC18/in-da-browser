import randomImage from '../scripts/random-image.js'

document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('#dawgify').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const activeTab = tabs[0];
      const dawgs = [];
      let counter = 0;
      while (counter < 50) {
        dawgs.push(randomImage());
        counter ++;
      };
      chrome.tabs.sendMessage(activeTab.id, { dawgs })
    });
  });

  document.querySelector('#about').addEventListener('click', () =>
    window.open('https://github.com/DanaMC18/in-da-browser'));

  document.querySelector('#feedback').addEventListener('click', () =>
    window.open('https://github.com/DanaMC18/in-da-browser/issues'));

});
