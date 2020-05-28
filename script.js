'use strict';

window.onload = function () {
  chrome.runtime.sendMessage(null, response => {
    console.log(`Replacing all <<${response.find}>> with <<${response.replace}>>.`);
    let myRegExp = new RegExp(response.find, 'g');
    [].forEach.call(
      document.querySelectorAll('input, textarea'),
      function (e) { e.value = e.value.replace(myRegExp, response.replace); }
    );
  });
}