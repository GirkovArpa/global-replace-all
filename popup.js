'use strict';

document.getElementById('find').addEventListener('input', () => {
  const find = document.getElementById('find').value;
  chrome.runtime.sendMessage({ message: 'setFind', find });
});

document.getElementById('replace').addEventListener('input', () => {
  const replace = document.getElementById('replace').value;
  chrome.runtime.sendMessage({ message: 'setReplace', replace });
});