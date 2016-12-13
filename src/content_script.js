var spies = {
  'www.fullstory.com/s/fs.js': 'fullstory',
  'cdn.inspectlet.com/inspectlet.js': 'inspeclet',
  'static.hotjar.com/c/hotjar': 'hotjar',
  'cdn.mouseflow.com/projects': 'mouseflow',
  'cdn.hoverowl.com/analytics/hoverowl.js': 'hoverowl',
  'd10lpsik1i8c69.cloudfront.net/w.js': 'luckyorange',
  'cjs.ptengine.com/pta_en.js': 'ptengine',
  'sessioncam.recorder.js': 'sessioncam',
  'rec.getsmartlook.com/recorder.js': 'smartlook'
};

var html = document.documentElement.innerHTML;

var found = [];
for (var url in spies) {
  if (html.indexOf(url) >= 0) {
    found.push(spies[url]);
  }
}

chrome.runtime.sendMessage({ found: found });
