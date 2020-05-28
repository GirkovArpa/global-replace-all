'use strict';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  sendResponse({ find: 'foo', replace: 'bar' });
});