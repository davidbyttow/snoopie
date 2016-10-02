
var DEFAULT_TITLE = 'No snoops detected';
var DEFAULT_ICON = 'snooptracker-inactive-16.png';
var WATCHING_ICON = 'snooptracker-active-16.png';

function handleMessage(request, sender) {
  var snoops = [];
  if (request.foundFs) {
    snoops.push('fullstory');
  }
  if (request.foundIn) {
    snoops.push('inspectlet');
  }
  if (request.foundHj) {
    snoops.push('hotjar');
  }

  var title = DEFAULT_TITLE;
  var icon = DEFAULT_ICON;
  var isWatching = snoops.length;
  if (snoops.length) {
    title = 'Snoops detected: ' + snoops.join(',');
    icon = WATCHING_ICON;
  }
  chrome.browserAction.setIcon({ path: icon });
  chrome.browserAction.setTitle({ title: title });
}

chrome.runtime.onMessage.addListener(handleMessage);

function runTest() {
  chrome.tabs.executeScript(null, {file: "content_script.js"});
}

chrome.browserAction.onClicked.addListener(runTest);
chrome.tabs.onActivated.addListener(runTest);

var timeout = null;

chrome.tabs.onUpdated.addListener(function() {
  runTest();

  // Check again in a second to account for a slow load.
  if (timeout === null) {
    timeout = setTimeout(function() {
      timeout = null;
      runTest();
    }, 1000);
  }
});
