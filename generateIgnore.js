const path = require('path');

let apiList;
try {
  apiList = require(path.join(__dirname, 'discovery', 'index.json'));
} catch (e) { }

const whitelist = /^analytics.*|drive:v3/;

let ignoreList = apiList ? apiList.items.reduce((mem, item) => {
  if (!whitelist.test(item.id)) {
    mem.push(item.id);
  }
  return mem;
}, []) : [];

ignoreList = { ignore: ignoreList };

require('fs').writeFileSync('ignore.json', JSON.stringify(ignoreList, null, 2));
