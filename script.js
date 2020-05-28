'use strict';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);

  let myRegExp = new RegExp(request.find, 'g');

  [].forEach.call(
    document.querySelectorAll('input, textarea'),
    function (e) { e.value = e.value.replace(myRegExp, request.replace); }
  );
});