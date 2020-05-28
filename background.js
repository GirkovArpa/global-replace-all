'use strict';

let find = '';
let replace = '';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.message) {
    case 'setFind':
      find = request.find;
      break;
    case 'setReplace':
      replace = request.replace;
      break;
    case 'tabLoaded':
      sendResponse({ find, replace });
      break;
  }
});