const path = require('path');
const apiList = require(path.join(__dirname, 'discovery', 'index.json'));

const whitelist = /^analytics.*/;

let ignoreList = apiList.items.reduce((mem, item) => {
  if (!whitelist.test(item.id)) {
    mem.push(item.id);
  }
  return mem;
}, []);
ignoreList = { ignore: ignoreList };

require('fs').writeFileSync('ignore.json', JSON.stringify(ignoreList, null, 2));
