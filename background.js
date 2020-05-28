'use strict';

chrome.browserAction.onClicked.addListener(tab => {
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
    tabList.forEach(tab => chrome.tabs.sendMessage(tab.id, { find: 'foo', replace: 'bar' }));
    sendResponse(tabList);
  });
});