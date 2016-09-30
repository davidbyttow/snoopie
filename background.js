
function handleMessage(request, sender) {
  if (request.found) {
    chrome.browserAction.setIcon({path: 'red.png'});
  } else {
    chrome.browserAction.setIcon({path: 'gray.png'});    
  }
}

function check() {
  chrome.tabs.executeScript(null, {file: "content_script.js"});
}

chrome.runtime.onMessage.addListener(handleMessage);

chrome.browserAction.onClicked.addListener();
