'use strict';

let find = '';
let replace = '';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.message) {
    case 'get':
      sendResponse({ find, replace });
      break;
    case 'setFind':
      find = request.find;
      break;
    case 'setReplace':
      replace = request.replace;
      break;
    case 'tabLoaded':
      sendResponse({ find, replace });
      break;
    case 'replaceAll':
      return replaceAll();
      break;
  }
});

function replaceAll() {
  new Promise(async resolve => {
    let tabList = [];
    chrome.windows.getAll({ populate: true }, windows => {
      windows.forEach(window => {
        window.tabs.forEach(tab => {
          tabList.push(tab);
        });
      });
      resolve(tabList);
    });
  }).then(tabList => {
    tabList.forEach(tab => chrome.tabs.sendMessage(tab.id, { message: 'replaceAll', find, replace }));
  });
  return true; // this means its async
}

