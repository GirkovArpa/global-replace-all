chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);
  //console.log(sender.tab.id);
});