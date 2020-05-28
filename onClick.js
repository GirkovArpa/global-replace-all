chrome.runtime.sendMessage('Please send cookies!', response => {
  console.log(response);
});