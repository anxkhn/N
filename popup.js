document.getElementById('replaceButton').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const search = document.getElementById('search').value;
    const replace = document.getElementById('replace').value;
    chrome.tabs.sendMessage(tabs[0].id, {search, replace});
  });
});
