// content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.search && request.replace) {
      const regex = new RegExp(request.search, 'g');
      const replacement = request.replace;
  
      const elements = document.getElementsByTagName('*');
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
  
        for (let j = 0; j < element.childNodes.length; j++) {
          const node = element.childNodes[j];
  
          if (node.nodeType === 3) {
            const text = node.nodeValue;
            const replacedText = text.replace(regex, replacement);
            if (replacedText !== text) {
              element.replaceChild(document.createTextNode(replacedText), node);
            }
          }
        }
      }
    }
  });
  