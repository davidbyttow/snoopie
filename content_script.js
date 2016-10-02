var html = document.documentElement.innerHTML;
var foundFs = html.indexOf('_fs_namespace') >= 0 || html.indexOf('www.fullstory.com/s/fs.js') >= 0;
var foundIn = html.indexOf('cdn.inspectlet.com/inspectlet.js') >= 0;
var foundHj = html.indexOf('static.hotjar.com/c/hotjar') >= 0;

chrome.runtime.sendMessage({
  foundFs: foundFs,
  foundIn: foundIn,
  foundHj: foundHj
});
