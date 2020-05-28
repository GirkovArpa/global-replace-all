chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.executeScript(null, { file: 'onClick.js' });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
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
    sendResponse(tabList);
  });
  return true; // this means its async
});


