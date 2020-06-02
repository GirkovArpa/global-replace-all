'use strict';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message == 'replaceAll') {
    replaceAll(request.find, request.replace);
    sendResponse({ message: 'done ' });
  }
});

window.onload = function () {
  chrome.runtime.sendMessage({ message: 'tabLoaded' }, response => {
    replaceAll(response.find, response.replace);
  });
}

function replaceAll(find, replace) {
  console.log(`Replacing all << ${find} >> with << ${replace} >>.`);
  let myRegExp = new RegExp(escapeRegExp(find), 'gi');
  [].forEach.call(
    document.querySelectorAll('input, textarea'),
    function (e) { e.value = e.value.replace(myRegExp, replace); }
  );
}

function escapeRegExp(string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}