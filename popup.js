'use strict';

const findBox = document.getElementById('find');
const replaceBox = document.getElementById('replace');

chrome.runtime.sendMessage({ message: 'get' }, response => {
  findBox.value = response.find;
  replaceBox.value = response.replace;
});

document.getElementById('find').addEventListener('input', () => {
  const find = findBox.value;
  chrome.runtime.sendMessage({ message: 'setFind', find });
});

document.getElementById('replace').addEventListener('input', () => {
  const replace = replaceBox.value;
  chrome.runtime.sendMessage({ message: 'setReplace', replace });
});

document.addEventListener('keypress', function (e) {
  if (e.keyCode == 13) {
    window.close();
  }
});