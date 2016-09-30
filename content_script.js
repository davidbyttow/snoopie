var found = document.documentElement.innerHTML.indexOf('_fs_namespace') >= 0;
chrome.runtime.sendMessage({ found: found });
